import React, { useEffect, useState } from "react";
import userImage from "../../images/userImage.png";
import * as m from "../../Styles/Review/ReviewCommentListStyle";
import { useDispatch, useSelector } from "react-redux";
import { commentActions } from "../../toolkit/actions/comment_action";
import { useParams } from "react-router-dom";
import ReviewCommentUpdate from "./ReviewCommentUpdate";

const ReviewCommentList = () => {
  const { idx, user_id } = useParams();
  console.log("sldkjf", user_id);
  const dispatch = useDispatch();

  //comment list
  const getCommentList = (idx) => {
    dispatch(commentActions.getCommentList(idx));
  };

  const commentList = useSelector((state) => state.comment.commentList);
  // console.log("detail", commentList);
  const pageInfo = useSelector((state) => state.comment.pageInfo);

  useEffect(() => {
    getCommentList(idx);
  }, []);

  //comment delete
  const commentDelete = async (commentId, commentIdx) => {
    // e.preventDefault();
    await dispatch(commentActions.getCommentDelete(commentId, commentIdx));
    getCommentList(idx);
  };

  //comment update
  const [editingCommentIdx, setEditingCommentIdx] = useState(null);

  return (
    <>
      <m.WrapUserReviewCommentBox>
        {commentList.map((comment) => (
          <m.UserReviewCommentBox key={comment.idx}>
            <m.CommentUser to={`/mypage/${comment.user_id}`}>
              <m.CommentUserImage
                src={userImage}
                alt="유저 이미지"
              ></m.CommentUserImage>
            </m.CommentUser>

            {editingCommentIdx === comment.idx ? (
              <ReviewCommentUpdate
                user_review_idx={comment.user_review_idx}
                idx={comment.idx}
                user_id={comment.user_id}
                comment={comment.comment}
                // onUpdate={handleCommentUpdate}
              />
            ) : (
              <m.CommentUserContent>
                <m.CommentUserName>{comment.user_id}</m.CommentUserName>
                <m.CommentContent>{comment.comment}</m.CommentContent>
              </m.CommentUserContent>
            )}
            <m.Btn>
              <m.UpdateBtn
                type="submit"
                value="수정"
                onClick={() => setEditingCommentIdx(comment.idx)}
              >
                수정
              </m.UpdateBtn>
              <m.DeleteBtn
                onClick={() => commentDelete(comment.user_id, comment.idx)}
              >
                {/* <m.DeleteBtn onClick={commentDelete}> */}
                삭제
              </m.DeleteBtn>
            </m.Btn>
          </m.UserReviewCommentBox>
        ))}
      </m.WrapUserReviewCommentBox>
    </>
  );
};

export default ReviewCommentList;
