import React from 'react';

const ProductEntry = ({props}) => {

  return (
    <div>
      <img src={props.images[0]} width='100' height='100' alt='an Image should be here' />
      <div >{props.name}</div>
      <div>{props.rating}</div>
      <div>{props.numRatings}</div>
      <div>${props.price.toFixed(2)}</div>
      <div hidden={props.prime}>prime</div>
    </div>
  );

}
//hidden={props.prime}<img src={require('./images/primeLogo_621x260.png')} />
//https://medium.com/javascript-in-plain-english/how-to-display-images-from-local-assets-images-folder-when-working-with-react-feb6c5dba526

export default ProductEntry;