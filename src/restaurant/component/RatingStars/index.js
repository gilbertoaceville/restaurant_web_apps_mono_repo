/**
 * Rating Component
 * 
 * Use the onChange props to get the value of the newRating
 * Use the iconSize props to change the size of the Stars
 */

import React, { useState } from 'react'
import { RatingStar, RatingWrapper } from './ratingStars.styles'

const Index = ({ iconSize, onChange }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);


  const changeRating = (newRating) => {
    setRating(newRating);
    onChange?.(newRating);
  };

  return (
    <RatingWrapper>
      {[...Array(5)].map((star, idx) => {
        idx += 1;
        return (
          <button
            type="button"
            key={idx}
            className={idx <= (hover || rating) ? "on" : "off"}
            onClick={() => changeRating(idx)}
            onMouseEnter={() => setHover(idx)}
            onMouseLeave={() => setHover(rating)}
          >
            <RatingStar  font-size={iconSize} />

            {/* <span className="star">&#9733;</span> */}
          </button>
        );
      })}
    </RatingWrapper>
  )
}

export default Index
