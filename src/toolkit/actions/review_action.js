import axios from "axios";
import { reviewReducers } from "../createSlice/review_createSlice";
import { useState } from "react";

//좋아요 순 리뷰 정렬
function getMostlikeReviewList() {
  return async (dispatch) => {
    const reviewResponse = await axios
      .get(`/review/mostlike`)
      .then((response) => response.data);
    // console.log("action>>", reviewResponse);
    dispatch(reviewReducers.getMostlikeReviewList({ reviewResponse }));
  };
}

//최신 순 리뷰 정렬
function getNewReviewList() {
  return async (dispatch) => {
    const reviewResponse = await axios
      .get(`/review/newreview`)
      .then((response) => response.data);
    // console.log("action>>", reviewResponse);
    dispatch(reviewReducers.getNewReviewList({ reviewResponse }));
  };
}

//리뷰 리스트
function getReviewList() {
  return async (dispatch) => {
    const reviewResponse = await axios
      .get(`/review`)
      .then((response) => response.data);
    // console.log("action>>", reviewResponse);
    dispatch(reviewReducers.getReviewList({ reviewResponse }));
  };
}

// 리뷰 detail
function getReviewDetail(idx) {
  return async (dispatch) => {
    const reviewResponse = await axios
      .get(`/review/view/${idx}`)
      .then((response) => response.data);
    console.log("view>>", reviewResponse);
    dispatch(reviewReducers.getReviewDetail({ reviewResponse }));
  };
}

//리뷰 write
function getReviewWrite(user_id, movie_code, formData) {
  console.log("formData:", formData);
  return async () => {
    await axios.post(`/review/write/${user_id}/${movie_code}`, formData);
    console.log(user_id);
  };
}

//리뷰 update
function getReviewUpdate(idx, formData) {
  return async () => {
    await axios
      .put(`/review/update/${idx}`, formData)
      .then((response) => response.data);
    console.log("Ffformdata", formData);
  };
}

//리뷰 delete
function getReviewDelete(idx) {
  return async () => {
    await axios
      .delete(`/review/delete/${idx}`)
      .then((response) => response.data);
  };
}

export const reviewActions = {
  getMostlikeReviewList,
  getNewReviewList,
  getReviewList,
  getReviewDetail,
  getReviewWrite,
  getReviewUpdate,
  getReviewDelete,
};