import React, { useState } from 'react';
import primeIcon from './images/primeLogo_621x260.png';
import emptyStar from './images/empty-star.png';
import halfStar from './images/half-star.png';
import fullStar from './images/full-star.png';

const ProductEntry = ({props}) => {

  // React hook to cycle through images on image hover
  const [currentImg, setImage] = useState(0);
  const setImgHelper = (run) => { // figure out how to use setInterval to cycle through images
    if(run) {
      setImage(1);
    } else {
      setImage(0);
    }
  }


  // react hook for changing product name style
  const [nameStyle, setStyle] = useState('prodName');
  const setStyleHelper = (style) => {
    setStyle(style);
  }

  // adds stars
  let starRating = (rating) => {
    let fills = [];
    while(rating !== 0 || fills.length < 5) {
      if(rating - 2 >= 0) {
        fills.push(fullStar);
        rating -=2;
      } else if (rating -1 >= 0) {
        fills.push(halfStar);
        rating -= 1;
      } else {
        fills.push(emptyStar);
      }
    }
    return (
      <div>
        {fills.map((star) => {
          return <img className='stars' src={star}/>
        }
      )}
      <span> {props.numRatings}</span>
      </div>
    );
  }

  return (
    <div className='aProduct' onClick={() => console.log('This is where you would be redirected to', props.name)}>
      <div
        onMouseEnter={()=> setStyle('productHover')}
        onMouseLeave={()=> setStyle('productName')}
      >
        <img
          className='prodImg'
          src={props.images[currentImg]}
          alt='productImg'
          onMouseEnter={() => setImgHelper(true)}
          onMouseLeave={() => setImgHelper(false)}
        />
        <div className={nameStyle}>{props.name}</div>
      </div>
      <div className='prodRating'>{starRating(props.rating)}</div>
      <div className='prodPrice'>${props.price.toFixed(2)}<span>
        <img className='primeIcon' hidden={props.prime} alt='primeIcon' src={primeIcon}/>
        </span>
      </div>

    </div>
  );
}

export default ProductEntry;