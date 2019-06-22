import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

class Customer extends React.Component {
    render() {
        return (
             <TableRow>
                 <TableCell><img src={this.props.image} alt="profile"/>{this.props.name}</TableCell>
             </TableRow>
        )
        
    }
}


export default Customer;