import React, { Component } from 'react';
import Customer from './components/Customer';

const customers =[
{
  'id': '1',
  'image': 'https://placeimg.com/64/64/any',
  'name': '金亨辰'
},
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
    return (
      <div>
        {customers.map(c => { return ( <Customer key={c.id} name={c.name} image={c.image}/>);})}
      </div>
    );
  }
}

export default App;
