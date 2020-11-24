import React from 'react';
import ProductEntry from './ProductEntry.jsx';
import styled from 'styled-components';
// react styles
const ProductCarousel = styled.div `
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
`;


const ProductList = ({products, page}) => { // display 5-7 products at a time depending on window size
  //console.log('products list', products);

  let startIndex = (page - 1) * 7;
  let pageProducts = products.slice(startIndex, (startIndex + 7));

  return (
    <ProductCarousel>
      {pageProducts.map((aProduct) => {
        return <ProductEntry props={aProduct}/>
      }
    )}
    </ProductCarousel>
  );
}

export default ProductList;