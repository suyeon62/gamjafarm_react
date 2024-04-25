import axios from "axios";
import { commentReducers } from "../createSlice/comment_createSlice";
import { useState } from "react";

//review별 comment 리스트
function getCommentList(user_review_idx) {
  return async (dispatch) => {
    const commentResponse = await axios
      .get(`/comment/${user_review_idx}`)
      .then((response) => response.data);
    console.log("action>>", commentResponse);
    dispatch(commentReducers.getCommentList({ commentResponse }));
  };
}

export const commentActions = {
  getCommentList,
};
