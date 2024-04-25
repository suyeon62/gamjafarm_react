import axios from "axios";
import { movieReducers } from "../createSlice/movie_createSlice";
import { useState } from "react";

//장르별 영화 리스트
function getMovieList(currentPage, genre) {
  return async (dispatch) => {
    const movieResponse = await axios
      .get(`/movie/${genre}/${currentPage}`)
      .then((response) => response.data);
    console.log("action>>", movieResponse);
    dispatch(movieReducers.getMovieList({ movieResponse }));
  };
}

export const movieActions = {
  getMovieList,
};
