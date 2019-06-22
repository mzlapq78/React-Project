import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import CustomerAdd from './components/CustomerAdd';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { async } from 'rxjs/internal/scheduler/async';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overfowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit *2
  }
});



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      customers:"",
      completed: 0,
      user:""
    }
  }

  stateRefresh = () => {
    this.setState({
      customers:"",
      completed: 0,
    });
    this.callApi()
     .then(res => this.setState({customers: res}))
     .catch(err => console.log(err));
  }

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
    this.callApi()
     .then(res => this.setState({customers: res}))
     .catch(err => console.log(err));
    this.callApi2()
     .then(res => this.setState({user: res}))
     .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  callApi2 = async () => {
    const response = await fetch('/api/user');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 1});
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
       <Paper className={classes.root}>
         <Table className={classes.table}>
           <TableHead>
             <TableRow>
                {this.state.user ? this.state.user.map(c => { 
                return ( <Customer key={c.id} name={c.name} image={c.image}/>);
                }):
                <TableRow>
                  <TableCell colSpan="1" align = "lightSide">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/> 
                  </TableCell>
                </TableRow>
                }
             </TableRow>
           </TableHead>
           <TableBody>
             <TableRow>
               {this.state.customers ? this.state.customers.map(c => { 
               return ( <Customer key={c.id} name={c.name} image={c.image}/>);
               }):
                 <TableRow>
                  <TableCell colSpan="1" align = "lightSide">
                     <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed}/> 
                  </TableCell>
                </TableRow>
              }
             </TableRow>
           </TableBody>
         </Table>
       </Paper>
       <CustomerAdd stateRefresh={this.stateRefresh}/>     
      </div>
    );
  }
}

export default withStyles(styles)(App);