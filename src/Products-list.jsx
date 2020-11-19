import React from 'react';
import ProductEntry from './ProductEntry.jsx';

const ProductList = ({products, page}) => { // display 5-7 products at a time depending on window size
  //console.log('products list', products);

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