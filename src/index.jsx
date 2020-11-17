import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import ProductList from './Products-list.jsx';
import './styles/styles.css';

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
        this.setState({
          itemData: res.data,
          numPages: Math.ceil(res.data.length / 7)});
      }
    })
    .catch((res) => {
      console.log('error in get request');
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
        <h5 className='title'>
          Products related to this item
          <span className='page'>
            Page {this.state.currentPage} of {this.state.numPages}
            <span hidden={this.state.startOverHidden} onClick={this.startOver.bind(this)}> | Start over</span>
          </span>
        </h5>
        <div className='productList'>
          <button className='leftRights' name='left' onClick={this.changePage.bind(this)}>left</button>
          <ProductList products={this.state.itemData} page={this.state.currentPage}/>
          <button className='leftRights' name='right' onClick={this.changePage.bind(this)}>right</button>
        </div>
      </div>
    );
  }
}
ReactDOM.render(<RelatedItems/>, document.getElementById('app'));