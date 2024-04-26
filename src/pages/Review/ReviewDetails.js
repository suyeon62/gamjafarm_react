import React, { useEffect, useState } from "react";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import axios from "axios";
import commentImage from "../../images/commentImage.png";
import graystar from "../../images/graystar.png";
import commentIcon from "../../images/commentIcon.png";
import * as m from "../../Styles/Review/ReviewDetailsStyle";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from "../../toolkit/actions/review_action";
import { commentActions } from "../../toolkit/actions/comment_action";

import ReviewUpdatePopup from "./ReviewUpdatePopup";
import ReviewCommentList from "./ReviewCommentList";
import ReviewCommentWrite from "./ReviewCommentWrite";

const ReviewDetails = () => {
  const { code } = useParams();
  const { idx } = useParams();

  const dispatch = useDispatch();
  const navigator = useNavigate();
  //   console.log("code>>>>", code);

  //review detail
  useEffect(() => {
    dispatch(reviewActions.getReviewDetail(idx));
  }, []);

  const reviewDetail = useSelector((state) => state.review.reviewDetail);

  //review update
  const [inputs, setInputs] = useState({
    content: "",
  });
  const { content } = inputs;

  useEffect(() => {
    setInputs((prev) => {
      return { ...prev, ...reviewDetail };
    });
  }, []);

  //review delete
  const handelDelete = async (e) => {
    e.preventDefault();
    dispatch(reviewActions.getReviewDelete(idx));
    navigator(`/playground/review/1`);
  };

  //comment update
  const commentDetail = useSelector((state) => state.comment.commentDetail);
  console.log("cmtdetail>>", commentDetail);
  const { user_id } = commentDetail;
  console.log("user_id", user_id);

  //popup
  const [updatePopupOpen, setUpdatePopupOpen] = useState(false);
  const [commentPopupOpen, setCommentPopupOpen] = useState(false);
  const [commentUpdatePopupOpen, setCommentUpdatePopupOpen] = useState(false);

  // 리뷰 수정 팝업 열기 함수
  const openUpdatePopup = () => {
    setUpdatePopupOpen(true);
  };

  // 리뷰 수정 팝업 닫기 함수
  const closeUpdatePopup = () => {
    setUpdatePopupOpen(false);
  };

  // 댓글 팝업 열기 함수
  const openCommentPopup = () => {
    setCommentPopupOpen(true);
  };

  // 댓글 팝업 닫기 함수
  const closeCommentPopup = () => {
    setCommentPopupOpen(false);
  };

  // 댓글 팝업 열기 함수
  const openCommentUpdatePopup = (commentIdx) => {
    setCommentUpdatePopupOpen(true);
  };

  // 댓글 팝업 닫기 함수
  const closeCommentUpdatePopup = () => {
    setCommentUpdatePopupOpen(false);
  };

  return (
    <>
      <m.Review>
        <m.ReviewBox>
          <m.BoxTitleContainer>
            <m.BoxTitle>
              <m.User to={`/mypage/${reviewDetail.user_id}`}>
                <m.UserImage src={userImage} alt="유저 이미지"></m.UserImage>
                <m.UserName>{reviewDetail.user_id}</m.UserName>
              </m.User>
              <m.MovieName>{reviewDetail.name_kor}</m.MovieName>
            </m.BoxTitle>

            <m.RightsideContents>
              <m.PosterLink to={`/movie/${reviewDetail.movie_code}`}>
                <m.Poster src={reviewDetail.poster} alt="poster"></m.Poster>
              </m.PosterLink>
            </m.RightsideContents>
          </m.BoxTitleContainer>

          <m.BoxContents>
            <m.UserReview>
              {updatePopupOpen ? (
                <ReviewUpdatePopup
                  popupOpen={updatePopupOpen}
                  // closePopup={closeUpdatePopup}
                  closePopup={closeUpdatePopup}
                  reviewDetail={reviewDetail}
                />
              ) : (
                reviewDetail.review
              )}
            </m.UserReview>
            <m.Btn>
              <m.UpdateBtn onClick={openUpdatePopup}>리뷰 수정</m.UpdateBtn>
              <m.DeleteBtn onClick={handelDelete}>리뷰 삭제</m.DeleteBtn>
            </m.Btn>
          </m.BoxContents>

          <m.ActiveArea>
            <m.Like>
              <m.LikeImg src={likeImage} alt="좋아요 이미지"></m.LikeImg>
              <m.LikeWord>{reviewDetail.total_likes_cnt}</m.LikeWord>
            </m.Like>

            <m.UserReviewComment>
              <m.UserReviewCommentImg
                src={commentImage}
                alt="댓글 이미지"
              ></m.UserReviewCommentImg>
              <m.UserReviewCommentWord>
                {reviewDetail.total_comment_cnt}
              </m.UserReviewCommentWord>
            </m.UserReviewComment>
          </m.ActiveArea>

          <ReviewCommentWrite />

          {/* {commentList.length === 0 ? (
            <m.NoCommentsBox>
              <m.CommentIcon
                src={commentIcon}
                alt="댓글 아이콘"
              ></m.CommentIcon>
              <m.CommentInfo>처음으로 댓글을 남겨보세요</m.CommentInfo>
            </m.NoCommentsBox>
          ) : (
            <ReviewCommentList />
          )} */}

          <m.NoCommentsBox>
            <m.CommentIcon src={commentIcon} alt="댓글 아이콘"></m.CommentIcon>
            <m.CommentInfo>처음으로 댓글을 남겨보세요</m.CommentInfo>
          </m.NoCommentsBox>

          <ReviewCommentList />
        </m.ReviewBox>
      </m.Review>
    </>
  );
};

export default ReviewDetails;
