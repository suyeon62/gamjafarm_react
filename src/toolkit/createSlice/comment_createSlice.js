import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  commentList: [],
  pageInfo: { currentPage: 1 },
};

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    getCommentList(state, action) {
      // console.log("action>>>>", action.payload);
      state.commentList = action.payload.commentResponse.commentList;
      state.pageInfo = action.payload.commentResponse.pageInfo;
    },
  },
});

//board_action에서 사용함
//export const{getBoardList}=boardSlice.actions;
export const commentReducers = commentSlice.actions;

//store에서 사용함0.0
export default commentSlice;
