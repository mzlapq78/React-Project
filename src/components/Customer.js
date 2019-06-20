import React from 'react';
import App from '../App';

class Customer extends React.Component {
    render() {
        return (
             <div>
                  <img src={this.props.image} alt="prfile"/>            
                  <h2>{this.props.name}</h2>
            </div>
        )
        
    }
}


export default Customer;