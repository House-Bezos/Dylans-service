import React from 'react';
import primeIcon from './images/primeLogo_621x260.png';

const ProductEntry = ({props}) => {
  // add prime image
  // add highlight and underline of name on mouse over of image or name
  // add image change every .5 seconds on mouse over

  return (
    <div className='aProduct' width='160'>
      <img src={props.images[0]} width='160' height='160' alt='productImg' />
      <div overflow-wrap='break-word' >{props.name}</div>
      <div className='prodRating'>{props.rating}</div>
      <div className='prodRating'> {props.numRatings}</div>
      <div className='amount' >${props.price.toFixed(2)}</div>
      <img hidden={props.prime} alt='primeIcon' src={primeIcon} width='36' height='12' />
    </div>
  );

}

export default ProductEntry;