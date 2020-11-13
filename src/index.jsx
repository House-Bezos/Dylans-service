import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import Products from './Products-list.jsx';

console.log('react connected');

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: []
    };
  }

  render() {
    return (
      <div className='relatedItems'>
        <h5 className='title'>Related Items</h5>
        <button className='leftRights' name='leftButton'>left</button>
        <button className='leftRights' name='rightButton'>right</button>
      </div>
    );
  }
}
ReactDOM.render(<RelatedItems/>, document.getElementById('app'));