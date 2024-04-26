import React, { useState } from "react";
import styled from "styled-components";

const StarContainer = styled.div`
  position: relative;
  font-size: 2rem;
  color: #ddd;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

const StarInput = styled.input`
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  opacity: 0;
  cursor: pointer;
`;

const StarSpan = styled.span`
  width: ${({ rating }) => `${rating * 10}%`};
  position: absolute;
  left: 0;
  color: rgb(255, 47, 110);
  overflow: hidden;
  pointer-events: none;
`;

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  return (
    <StarContainer>
      ★★★★★
      <StarSpan rating={rating}>★★★★★</StarSpan>
      <StarInput
        type="range"
        value={rating}
        onChange={handleRatingChange}
        step="1"
        min="0"
        max="10"
      />
    </StarContainer>
  );
};

export default StarRating;
