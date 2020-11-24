import React from 'react';
import ReactDOM from 'react-dom';
const axios = require('axios');
import ProductList from './Products-list.jsx';
// import './styles/styles.css';
import styled from 'styled-components';

// component styles

const RelatedComp = styled.div `
  font-family: 'Arial, sans-serif, Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode';
  color: black;
`;

const Title = styled.h4 `
  color: #CC6600;
`;

const PageInfo = styled.span `
  color: black ;
  position: fixed;
  right: 2%
`;

const StartOver = styled.span `
  color: #007185;
`;

const Carousel = styled.div `
  display: grid;
  grid-template-columns: 4% 92% 4%;
  justify-items: center;
  align-items: center;
`;

const Button = styled.button `
  width: 34px;
  height: 37px;
`;

class RelatedItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemData: [],
      currentPage: 1,
      numPages: 0,
      startOverHidden: true
      // windowWidth: window.innerWidth
      // come back to if > 1100px display 5 items,
      // > 1200 px => 6 items, >1300px => 7
      // update numPages to match the change
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    axios.get('/api/relatedProducts/all')
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
      <RelatedComp>
        <Title>
          Products related to this item
          <PageInfo>
            Page {this.state.currentPage} of {this.state.numPages}
            <StartOver hidden={this.state.startOverHidden} onClick={this.startOver.bind(this)}> | Start over</StartOver>
          </PageInfo>
        </Title>
        <Carousel>
          <Button id='left' name='left' onClick={this.changePage.bind(this)}> {'<'} </Button>
          <ProductList products={this.state.itemData} page={this.state.currentPage}/>
          <Button id='right' name='right' onClick={this.changePage.bind(this)}> {'>'} </Button>
        </Carousel>
      </RelatedComp>
    );
  }
}
ReactDOM.render(<RelatedItems/>, document.getElementById('RelatedProductsService'));
