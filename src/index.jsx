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
      numPages: 0,
      startOverHidden: true
    };
  }

  componentDidMount() {
    this.getData();
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
      let numPages = Math.ceil(numProds / 7);
      this.setState({numPages: numPages});
    });
  }

  changePage(event) {
    event.preventDefault();
    if (event.target.name === 'left') {
      if (this.state.currentPage !== 1) {
        let page = this.state.currentPage - 1;
        this.setState({currentPage: page});
        if(page === 1) {
          this.setState({startOverHidden: true});
        }
      }
    } else {
      if (this.state.currentPage < this.state.numPages) {
        let page = this.state.currentPage + 1;
        this.setState({currentPage: page, startOverHidden: false})
      }
    }
  }

  startOver(event) {
    this.setState({currentPage: 1, startOverHidden: true});
  }

  render() {
    return (
      <div className='relatedItems'>
        <h5 className='title'>Products related to this item</h5>
        <h5>Page {this.state.currentPage} of {this.state.numPages} </h5>
    <h5 hidden={this.state.startOverHidden} onClick={this.startOver.bind(this)}>| Start over</h5>
        <button className='leftRights' name='left' onClick={this.changePage.bind(this)}>left</button>
        <ProductList products={this.state.itemData} page={this.state.currentPage}/>
        <button className='leftRights' name='right' onClick={this.changePage.bind(this)}>right</button>
      </div>
    );
  }
}
ReactDOM.render(<RelatedItems/>, document.getElementById('app'));