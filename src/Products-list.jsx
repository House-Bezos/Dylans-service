import React from 'react';
import ProductEntry from './ProductEntry.jsx';

const ProductList = ({data, page}) => { // display 7 products at a time
  //console.log(page);
  // page 1 products 0-6, page 2 products 7-13, allow partial page population, i.e. < 7 products on a page
  let startIndex = (page - 1) * 7;
  let pageProducts = [];
  for (var i = 0; i < 7; i++) {
    // if (data[startIndex + i] !== undefined) { // breaks
    //   pageProducts.push(data[startIndex + i]);
    // }
  }
  return (
    <div>
      <ProductEntry/>
    </div>

  );
}

// {pageProducts.map((product) => (
//   <ProductEntry props={product}/>
// ))}

export default ProductList;