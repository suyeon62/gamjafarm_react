import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  pageInfo: {currentPage: 1},
  WishList: [],
}

const wishSlice = createSlice({
  name: "wish",
  initialState,
  reducers: {
    getWishList(state, action){
      console.log('action:', action.payload);
      state.WishList = action.payload.WishResponse.WishList;
      state.pageInfo = action.payload.WishResponse.pageInfo;
    },
  },
});

export const wishReducers = wishSlice.actions;

export default wishSlice;