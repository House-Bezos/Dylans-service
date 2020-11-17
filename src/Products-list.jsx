import React from 'react';
import ProductEntry from './ProductEntry.jsx';

const ProductList = ({products, page}) => { // display upto 7 products at a time
  //console.log('products list', products);
  // page 1 products 0-6, page 2 products 7-13, allow partial page population, i.e. < 7 products on a page
  let startIndex = (page - 1) * 7;
  let pageProducts = products.slice(startIndex, (startIndex + 7));

  return (
    <div className='productList'>
      {pageProducts.map((aProduct) => {
        return <ProductEntry props={aProduct}/>
      }
    )}
    </div>
  );
}

export default ProductList;