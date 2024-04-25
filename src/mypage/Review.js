import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Review.css';

const Review = () => {

  const [review, setReview] = useState([]);

  const getinfo = async (e) => {
    try {
      const response = await axios
        .get(`/review/${localStorage.id}`);
      const data = response.data;
      console.log(data)

    } catch (error) {
      console.error('error', error);
    }
  }

  useEffect(() => {
    getinfo();
  }, []);

  return (
    <>
      <div id='reviewContainer'>
        <div className='reviewTitle'>
          <h3>내가 평가한 영화</h3>
          <div className='line' />
        </div>

        {/*스크롤 */}
        <div className='review'>

          <div className='eachContainer'>
            <div className='movie'></div>
            <div className='reviewContent'></div>
          </div>

          <div className='eachContainer'>
            <div className='movie'></div>
            <div className='reviewContent'></div>
          </div>

          <div className='eachContainer'>
            <div className='movie'></div>
            <div className='reviewContent'></div>
          </div>

          <div className='eachContainer'>
            <div className='movie'></div>
            <div className='reviewContent'></div>
          </div>


        </div>




      </div>
    </>
  );
};

export default Review;