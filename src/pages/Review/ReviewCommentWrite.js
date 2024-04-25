import React, { useState } from "react";
import * as m from "../../Styles/Review/ReviewCommentWriteStyle";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { commentActions } from "../../toolkit/actions/comment_action";

const ReviewCommentWrite = () => {
  const { idx, user_id } = useParams();
  console.log("idx", idx);

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    content: "",
  });

  const { content } = inputs;

  const commentList = useSelector((state) => state.comment.commentList);

  const handleValueChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      user_id: user_id,
      comment: content,
      user_review_idx: idx,
    };
    // formData.append("user_id", localStorage.getItem("user_id"));
    console.log("formData", formData); //데이터 확인용

    await dispatch(commentActions.getCommentWrite(user_id, idx, formData));

    setInputs({
      content: "",
    });

    await dispatch(commentActions.getCommentList(idx));
  };
  return (
    <>
      <m.Popup>
        <form onSubmit={onSubmit}>
          <m.Textarea
            name="content"
            placeholder="user_id님의 리뷰에 댓글을 남겨주세요."
            onChange={handleValueChange}
            value={content}
          ></m.Textarea>

          <m.SaveButton
            style={{ opacity: content ? 1 : 0.5 }}
            type="submit"
            value="등록"
            onSubmit={onSubmit}
          >
            저장
          </m.SaveButton>
        </form>
      </m.Popup>
    </>
  );
};

export default ReviewCommentWrite;
