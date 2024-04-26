import React, { useEffect, useState } from "react";
import axios from "axios";
import * as m from "../../Styles/Review/ReviewWritePopupStyle";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { reviewActions } from "../../toolkit/actions/review_action";

const ReviewWritePopup = (props) => {
  const [moviesData, setMoviesData] = useState([]); // 영화 정보를 담을 상태

  const { code, user_id } = useParams();
  const { currentPage } = useParams();
  console.log("code>>>>", code, user_id);

  // const [popupOpen, setPopupOpen] = useState(); //팝업

  const dispatch = useDispatch();
  const navigator = useNavigate();

  const [inputs, setInputs] = useState({
    content: "",
  });
  const { content } = inputs;
  const reviewDetail = useSelector((state) => state.review.reviewDetail);

  const handleValueChange = (e) => {
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = { user_id: "test", review: content, movie_code: code };
    // formData.append("user_id", localStorage.getItem("user_id"));

    console.log("formData", formData); //데이터 확인용

    await dispatch(reviewActions.getReviewWrite(user_id, code, formData));

    setInputs({
      content: "",
    });

    closePopup();
    await dispatch(reviewActions.getMovieReviewList(code));
    // navigator(`/movie/${code}`);
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    // setPopupOpen(false);
    props.closePopup();
  };

  return (
    <>
      <m.Popup>
        {/* 팝업 닫기 버튼 */}
        <m.CloseBtn onClick={closePopup}>X 닫기</m.CloseBtn>
        {/* 팝업 내용 */}
        <m.CommentMenu>{reviewDetail.name_kor}</m.CommentMenu>
        <form onSubmit={onSubmit}>
          <m.TextContainer>
            <m.Textarea
              name="content"
              placeholder="이 작품에 대한 생각을 자유롭게 표현해주세요."
              onChange={handleValueChange}
            ></m.Textarea>
          </m.TextContainer>
          <m.WrapSave>
            <m.SaveBtn
              style={{ opacity: content ? 1 : 0.5 }}
              type="submit"
              value="등록"
              onSubmit={onSubmit}
            >
              저장
            </m.SaveBtn>
          </m.WrapSave>
        </form>
      </m.Popup>
    </>
  );
};

export default ReviewWritePopup;
