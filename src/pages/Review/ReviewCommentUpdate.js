import React, { useEffect, useState } from "react";
import * as m from "../../Styles/Review/ReviewCommentUpdateStyle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { commentActions } from "../../toolkit/actions/comment_action";

const ReviewCommentUpdate = (commentIdx) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [inputs, setInputs] = useState({
    content: "",
  });
  const { content } = inputs;
  console.log(">>cmtcontent>", content, inputs);

  const commentDetail = useSelector((state) => state.comment.commentDetail);
  console.log("cmtdetail>>", commentDetail);
  const { idx, user_id } = commentDetail;
  console.log("user_id", user_id);

  useEffect(() => {
    setInputs((prev) => {
      return { ...prev, ...commentDetail.comment };
    });
  }, [commentDetail]);

  const handleCommentValueChange = (e) => {
    e.preventDefault();
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleCommentUpdate = async (e) => {
    e.preventDefault();
    const formData = {
      idx: commentIdx.idx,
      user_id: commentIdx.user_id,
      comment: content,
      user_review_idx: commentIdx.user_review_idx,
    };
    // formData.append("user_id", localStorage.getItem("user_id"));

    console.log("content", formData); //데이터 확인용

    await dispatch(
      commentActions.getCommentUpdate(
        commentIdx.user_id,
        commentIdx.idx,
        formData
      )
    );

    setInputs({
      content: "",
    });

    // navigator(`/playground/review/detail/${reviewDetail.idx}`);
    await dispatch(commentActions.getCommentDetail(commentIdx.idx));
    // await dispatch(commentActions.getCommentList(commentIdx.idx));
    // navigator(`/playground/review/detail/${commentIdx.user_review_idx}`);
    window.location.reload();
  };

  const handleCancel = () => {
    navigator(-1);
  };
  return (
    <>
      <m.Popup>
        <m.CommentUpdate>
          <m.Textarea
            name="content"
            defaultValue={commentIdx.comment}
            onChange={handleCommentValueChange}
          ></m.Textarea>

          <m.CancelBtn onClick={handleCancel}>취소</m.CancelBtn>

          <m.UpdateBtn
            style={{ opacity: content ? 1 : 0.5 }}
            type="submit"
            value="수정"
            onClick={handleCommentUpdate}
          >
            수정
          </m.UpdateBtn>
        </m.CommentUpdate>
      </m.Popup>
    </>
  );
};

export default ReviewCommentUpdate;
