import { configureStore } from "@reduxjs/toolkit";
import reviewSlice from "./createSlice/review_createSlice";
import movieSlice from "./createSlice/movie_createSlice";
import commentSlice from "./createSlice/comment_createSlice";

const store = configureStore({
  reducer: {
    review: reviewSlice.reducer,
    movie: movieSlice.reducer,
    comment: commentSlice.reducer,
  },
});

export default store;
