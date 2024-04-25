import React, { useState } from "react";
import axios from "axios";
import * as m from "../../Styles/Review/ReviewCommentPopupStyle";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { commentActions } from "../../toolkit/actions/comment_action";

const ReviewCommentWritePopup = (props) => {
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

    closePopup();
    await dispatch(commentActions.getCommentList(idx));
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    props.closePopup();
  };
  return (
    <>
      <m.Popup>
        {/* 팝업 닫기 버튼 */}
        <m.CloseButton onClick={closePopup}>X 닫기</m.CloseButton>
        {/* 팝업 내용 */}
        <m.CommentMenu>댓글</m.CommentMenu>
        <form onSubmit={onSubmit}>
          <m.TextContainer>
            <m.Textarea
              name="content"
              placeholder="user_id님의 리뷰에 댓글을 남겨주세요."
              onChange={handleValueChange}
            ></m.Textarea>
          </m.TextContainer>
          <m.WrapSave>
            <m.SaveButton
              style={{ opacity: content ? 1 : 0.5 }}
              type="submit"
              value="등록"
              onSubmit={onSubmit}
            >
              저장
            </m.SaveButton>
          </m.WrapSave>
        </form>
      </m.Popup>
    </>
  );
};

export default ReviewCommentWritePopup;
