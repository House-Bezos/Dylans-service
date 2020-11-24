import React, { useState } from 'react';
import styled from 'styled-components';
const primeIcon = 'https://fec-related-items.s3-us-west-2.amazonaws.com/bars/primeCheck.png';
const emptyStar = 'https://fec-related-items.s3-us-west-2.amazonaws.com/bars/empty-star.png';
const halfStar = 'https://fec-related-items.s3-us-west-2.amazonaws.com/bars/half-star.png';
const fullStar = 'https://fec-related-items.s3-us-west-2.amazonaws.com/bars/full-star.png';

const Entry = styled.div `
  color:#007185;
  padding-left: 5px;
  padding-right: 5px;
  width: 15%;
`;

const ProdImg = styled.img `
  width: 99%;
  height: 160px;
`;

const HoverBox = styled.div `
  &:hover {
    color: #CC6600;
    text-decoration: underline;
  };
`;

const Stars = styled.img `
  width: 16px;
  height: 18px;
`;

const Price = styled.div `
  color: #B12704;
  align-content: baseline;
`;

const Prime = styled.img `
  width: 35px;
  padding-left: 2px;
`;

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
          return <Stars src={star}/>
        }
      )}
      <span> {props.numRatings}</span>
      </div>
    );
  }

  return (
    <Entry onClick={() => console.log('This is where you would be redirected to', props.name)}>
      <HoverBox>
        <ProdImg
          src={props.images[currentImg]}
          alt='productImg'
          onMouseEnter={() => setImgHelper(true)}
          onMouseLeave={() => setImgHelper(false)}
        />
        <div>{props.name}</div>
      </HoverBox>
      <div>{starRating(props.rating)}</div>
      <Price>${props.price.toFixed(2)}<span>
        <Prime hidden={props.prime} alt='primeIcon' src={primeIcon}/>
        </span>
      </Price>

    </Entry>
  );
}

export default ProductEntry;