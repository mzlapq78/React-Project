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

const customers =[
{
  'id': '2',
  'image': 'https://placeimg.com/64/64/8',
  'name': '郑彩媛'
},
{
  'id': '3',
  'image': 'https://placeimg.com/64/64/6',
  'name': '金雪熙'
}
]


class App extends Component {
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
          {customers.map(c => { return ( <Customer key={c.id} name={c.name} image={c.image}/>);})}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
