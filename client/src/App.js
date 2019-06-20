import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core/styles';
import { async } from 'rxjs/internal/scheduler/async';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overfowX: "auto"
  },
  table: {
    minWidth: 1080
  }
})

const customer ={
  'id': '1',
  'image': 'https://placeimg.com/64/64/any',
  'name': '金亨辰'
}



class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount() {
    this.callApi()
     .then(res => this.setState({customers: res}))
     .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }
  render() {
    const { classes } = this.props;
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell><img src={customer.image} alt="profile"/>{customer.name}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {this.state.customers ? this.state.customers.map(c => { 
            return ( <Customer key={c.id} name={c.name} image={c.image}/>);
          }): ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
