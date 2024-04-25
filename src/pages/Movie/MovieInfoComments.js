import React, { useEffect } from "react";
import axios from "axios";
import graystar from "../../images/graystar.png";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import leftarrow from "../../images/leftarrow.png";
import commentImage from "../../images/commentImage.png";
import * as m from "../../Styles/Movie/MovieInfoCommentsStyle";
import { reviewActions } from "../../toolkit/actions/review_action";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const MovieInfoComments = () => {
  const { code } = useParams();
  const dispatch = useDispatch();

  const getReviewList = () => {
    dispatch(reviewActions.getReviewList());
  };

  useEffect(() => {
    getReviewList();
  }, []);

  const reviewList = useSelector((state) => state.review.reviewList);
  console.log("reviewlist", reviewList);

  //해당 영화 리뷰 가져오기
  const selectedMovieReview = reviewList.filter(
    (review) => review.movie_code === code
  );
  console.log(selectedMovieReview);

  return (
    <>
      <m.Review>
        <m.UserReview>
          <m.WrapUserReviewTitle>
            <m.GobackButton to={`/movie/${code}`}>
              <m.GobackButtonImage
                src={leftarrow}
                alt="뒤로가기 버튼"
              ></m.GobackButtonImage>
            </m.GobackButton>
            <m.UserReviewTitle>코멘트</m.UserReviewTitle>
          </m.WrapUserReviewTitle>

          <m.UserReviewContentsContainer>
            {selectedMovieReview.map((review) => (
              <m.WrapUserReviewContents key={review.idx}>
                <m.UserReviewContentsTitleContainer>
                  <m.WrapUserReviewContentsTitle to={`/mypage`}>
                    <m.UserImage
                      src={userImage}
                      alt="유저 이미지"
                    ></m.UserImage>
                    <m.UserName>{review.user_id}</m.UserName>
                  </m.WrapUserReviewContentsTitle>
                  <m.MovieRate>
                    <m.RateImage src={graystar} alt="별점 이미지"></m.RateImage>
                    <m.UserRate>userRate</m.UserRate>
                  </m.MovieRate>
                </m.UserReviewContentsTitleContainer>

                <m.UserReviewContents>
                  <m.UserReviewContentsMain to="{`/playground/review/detail/{review.idx}`}">
                    {review.review}
                  </m.UserReviewContentsMain>
                </m.UserReviewContents>

                <m.ActiveArea>
                  <m.Like>
                    <m.LikeImg src={likeImage} alt="좋아요 이미지"></m.LikeImg>
                    <m.LikeCnt>{review.total_likes_cnt}</m.LikeCnt>
                  </m.Like>
                  <m.UserCommentComment>
                    <m.UserCommentCommentImg
                      src={commentImage}
                      alt="댓글 이미지"
                    ></m.UserCommentCommentImg>
                    <m.UserCommentCommentCnt>
                      userCommentCommnentCnt
                    </m.UserCommentCommentCnt>
                  </m.UserCommentComment>
                </m.ActiveArea>
              </m.WrapUserReviewContents>
            ))}
          </m.UserReviewContentsContainer>
        </m.UserReview>
      </m.Review>
    </>
  );
};

export default MovieInfoComments;
