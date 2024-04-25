import React, { useEffect, useState } from "react";
import * as m from "../../Styles/Review/ReviewCommentUpdatePopupStyle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { commentActions } from "../../toolkit/actions/comment_action";

const ReviewCommentUpdatePopup = (props) => {
  const { commentIdx } = props;
  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [inputs, setInputs] = useState({
    content: "",
  });
  const { content } = inputs;
  console.log(">>cmtcontent>", content, inputs);

  const commentDetail = useSelector((state) => state.comment.commentDetail);
  console.log("cmtdetail>>", commentDetail);
  const { user_id } = commentDetail;
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
      idx: commentIdx,
      user_id: user_id,
      comment: content,
      user_review_idx: commentDetail.user_review_idx,
    };
    // formData.append("user_id", localStorage.getItem("user_id"));

    console.log("content", formData); //데이터 확인용

    await dispatch(
      commentActions.getCommentUpdate(user_id, commentIdx, formData)
    );

    setInputs({
      content: "",
    });

    // navigator(`/playground/review/detail/${reviewDetail.idx}`);
    await dispatch(commentActions.getCommentDetail(commentIdx));
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    props.closePopup();
  };

  return (
    <>
      <m.Popup>
        {/* 팝업 닫기 버튼 */}
        <m.CloseBtn onClick={closePopup}>X 닫기</m.CloseBtn>
        {/* 팝업 내용 */}
        <m.CommentMenu>{commentDetail.user_id}</m.CommentMenu>

        <m.TextContainer>
          <m.Textarea
            name="content"
            defaultValue={commentDetail.comment}
            onChange={handleCommentValueChange}
          ></m.Textarea>
        </m.TextContainer>
        <m.WrapSave>
          <m.UpdateBtn
            style={{ opacity: content ? 1 : 0.5 }}
            type="submit"
            value="수정"
            onClick={handleCommentUpdate}
          >
            수정
          </m.UpdateBtn>
        </m.WrapSave>
      </m.Popup>
    </>
  );
};

export default ReviewCommentUpdatePopup;
