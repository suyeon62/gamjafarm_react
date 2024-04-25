import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./createSlice/review_createSlice";

const store = configureStore({
  reducer: {
    review: reviewSlice.reducer,
  },
});

export default store;
