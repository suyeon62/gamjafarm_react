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
import ReviewCommentPopup from "./ReviewCommentPopup";
import ReviewUpdatePopup from "./ReviewUpdatePopup";

const ReviewDetails = () => {
  const { code } = useParams();
  const { idx } = useParams();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  //   console.log("code>>>>", code);

  //detail
  useEffect(() => {
    dispatch(reviewActions.getReviewDetail(idx));
  }, []);

  const reviewDetail = useSelector((state) => state.review.reviewDetail);
  console.log("detail", reviewDetail);

  //update
  const [inputs, setInputs] = useState({
    content: "",
  });
  const { content } = inputs;

  useEffect(() => {
    setInputs((prev) => {
      return { ...prev, ...reviewDetail };
    });
  }, []);

  //delete
  const handelDelete = async (e) => {
    e.preventDefault();
    dispatch(reviewActions.getReviewDelete(idx));
    navigator(`/playground/review/1`);
  };

  const [updatePopupOpen, setUpdatePopupOpen] = useState(false);
  const [commentPopupOpen, setCommentPopupOpen] = useState(false);

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

  return (
    <>
      <m.Comment>
        <m.CommentBox>
          <m.BoxTitleContainer>
            <m.BoxTitle>
              <m.User to={`/mypage/${reviewDetail.user_id}`}>
                <m.UserImage src={userImage} alt="유저 이미지"></m.UserImage>
                <m.UserName>{reviewDetail.user_id}</m.UserName>
              </m.User>
              <m.MovieName>{reviewDetail.name_kor}null</m.MovieName>
              <m.MovieRate>
                <m.RateImage src={graystar} alt="별점 이미지"></m.RateImage>
                <m.UserRate>userRate</m.UserRate>
              </m.MovieRate>
            </m.BoxTitle>

            <m.RightsideContents>
              <m.UpdateBtn onClick={openUpdatePopup}>리뷰 수정</m.UpdateBtn>
              <m.DeleteBtn onClick={handelDelete}>리뷰 삭제</m.DeleteBtn>
              <m.PosterLink to={`/movie/${reviewDetail.movie_code}`}>
                <m.Poster src={reviewDetail.poster} alt="poster"></m.Poster>
              </m.PosterLink>
            </m.RightsideContents>
          </m.BoxTitleContainer>

          <m.UserComment>
            {updatePopupOpen ? (
              <ReviewUpdatePopup
                popupOpen={updatePopupOpen}
                // closePopup={closeUpdatePopup}
                closePopup={() => {
                  closeUpdatePopup();
                }}
              />
            ) : (
              reviewDetail.review
            )}
          </m.UserComment>

          <m.Cnt>
            <m.LikeCnt>
              좋아요{" "}
              {reviewDetail !== null && reviewDetail.hasOwnProperty("like_Cnt")
                ? reviewDetail.like_Cnt
                : "0"}
            </m.LikeCnt>
            <m.UserCommentCommentCnt>
              댓글 userCommentCommentCnt
            </m.UserCommentCommentCnt>
          </m.Cnt>

          <m.ActiveArea>
            <m.Like>
              <m.LikeImg src={likeImage} alt="좋아요 이미지"></m.LikeImg>
              <m.LikeWord>좋아요</m.LikeWord>
            </m.Like>

            <m.UserCommentComment>
              <m.UserCommentCommentImg
                src={commentImage}
                alt="댓글 이미지"
              ></m.UserCommentCommentImg>
              <m.UserCommentCommentWord onClick={openCommentPopup}>
                댓글
              </m.UserCommentCommentWord>
            </m.UserCommentComment>
          </m.ActiveArea>

          <m.NoCommentsBox>
            <m.CommentIcon src={commentIcon} alt="댓글 아이콘"></m.CommentIcon>
            <m.CommentInfo>처음으로 댓글을 남겨보세요</m.CommentInfo>
          </m.NoCommentsBox>

          <m.WrapUserCommentCommentBox>
            <m.UserCommentCommentBox>
              <m.CommentUser to={`/mypage`}>
                <m.CommentUserImage
                  src={userImage}
                  alt="유저 이미지"
                ></m.CommentUserImage>
              </m.CommentUser>
              <m.CommentUserContent>
                <m.CommentUserName>userName</m.CommentUserName>
                <m.CommentContent>comments</m.CommentContent>
                <m.CommentLike>
                  <m.CommentLikeWord>좋아요</m.CommentLikeWord>
                  <m.CommentLikeIcon
                    src={likeImage}
                    alt="좋아요 이미지"
                  ></m.CommentLikeIcon>
                  <m.CommentLikeCnt>Cnt</m.CommentLikeCnt>
                </m.CommentLike>
              </m.CommentUserContent>
            </m.UserCommentCommentBox>

            <m.UserCommentCommentBox>
              <m.CommentUser to={`/mypage`}>
                <m.CommentUserImage
                  src={userImage}
                  alt="유저 이미지"
                ></m.CommentUserImage>
              </m.CommentUser>
              <m.CommentUserContent>
                <m.CommentUserName>userName</m.CommentUserName>
                <m.CommentContent>comments</m.CommentContent>
                <m.CommentLike>
                  <m.CommentLikeWord>좋아요</m.CommentLikeWord>
                  <m.CommentLikeIcon
                    src={likeImage}
                    alt="좋아요 이미지"
                  ></m.CommentLikeIcon>
                  <m.CommentLikeCnt>Cnt</m.CommentLikeCnt>
                </m.CommentLike>
              </m.CommentUserContent>
            </m.UserCommentCommentBox>
          </m.WrapUserCommentCommentBox>
        </m.CommentBox>
      </m.Comment>

      {commentPopupOpen && (
        <ReviewCommentPopup
          popupOpen={commentPopupOpen}
          closePopup={closeCommentPopup}
        />
      )}
    </>
  );
};

export default ReviewDetails;
