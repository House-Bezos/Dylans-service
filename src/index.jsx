import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import ProductList from './Products-list.jsx';

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: [],
      currentPage: 1,
      numPages: 0 // 7 items per page
    };
  }

  ComponentDidMount() {
    //this.getData();
  }

  getData() {
    axios.get('/relatedProducts/all')
    .then((res) => {
      if (!res) {
        throw res;
      } else {
        this.setState({itemData: res.data});
      }
    })
    .catch((res) => {
      console.log('error in get request');
    })
    .then(() => {
      let numProds = this.state.itemData.length;
      let numPages = Math.round(numProds / 7);
      this.setState({numPages: numPages});
    });
  }

  changePage(event) {
    event.preventDefault();
    console.log(event.target.name, ' was clicked');
    if (event.target.name === 'left') {
      if (this.state.currentPage !== 1) {
        //this.setState({currentPage -= 1});
      }
    } else {
      if (this.currentPage !== this.state.numPages) {
        //this.setState({currentPage +=1});
      }
    }
    // update products page
  }

  render() {
    return (
      <div className='relatedItems'>
        <h5 className='title'>Products related to this item</h5>
        <h5>Page {this.state.currentPage} of {this.state.numPages}</h5>
        <button className='leftRights' name='left' onClick={this.changePage.bind(this)}>left</button>
        <ProductList products={this.state.itemData} page={this.state.currentPage}/>
        <button className='leftRights' name='right' onClick={this.changePage.bind(this)}>right</button>
      </div>
    );
  }
}
ReactDOM.render(<RelatedItems/>, document.getElementById('app'));