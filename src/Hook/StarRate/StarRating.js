import React, { useEffect, useState } from "react";

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  // useEffect(() => {
  //   drawStar();
  // }, [rating]);

  const drawStar = (target) => {
    // input 요소의 값에 따라 별을 채우는 span 요소의 너비를 조절합니다.
    document.querySelector(".star span").style.width = `${target.value * 10}%`;
  };

  return (
    <div className="star">
      ★★★★★
      <span style={{ width: `${rating * 10}%` }}>★★★★★</span>
      <input
        type="range"
        value={rating}
        onChange={handleRatingChange}
        step="1"
        min="0"
        max="10"
      />
    </div>
  );
};

export default StarRating;
