import React, { useEffect, useState } from "react";
import axios from "axios";
import * as m from "../../Styles/Movie/MovieGenreStyle";
import { useParams } from "react-router-dom";
import MovieGenrePagination from "./MovieGenrePagination";

const MovieGenre = () => {
  const [genreData, setGenreData] = useState([]);
  const [pageData, setPageData] = useState([]);

  const { genre, currentPage } = useParams();

  useEffect(() => {
    const fetchGenreData = async () => {
      try {
        const genreResponse = await axios.get(`/movie/${genre}/${currentPage}`);
        const { genreList, pageInfo } = genreResponse.data;
        setGenreData(genreList);
        setPageData(pageInfo);
      } catch (error) {
        console.error("Error fetching genre data:", error);
      }
    };

    fetchGenreData(); // 영화 정보를 가져오는 함수 호출
  }, [genre, currentPage]);

  return (
    <>
      <m.MovieGenreContainer>
        <m.WrapMovieGenre>
          <m.MovieGenreTitleContainer>
            <m.MovieGenreTitle>{genre}</m.MovieGenreTitle>
          </m.MovieGenreTitleContainer>

          <m.WrapMovie>
            {genreData.map((genre) => (
              <m.Movie key={genre.code}>
                <m.PosterLink to={`/movie/${genre.code}`}>
                  <m.Poster src={genre.poster} alt="poster"></m.Poster>
                </m.PosterLink>
                <m.MovieNameKor>{genre.name_kor}</m.MovieNameKor>
                <m.MovieInfo>
                  <m.MovieReleaseAt>
                    {" "}
                    {genre.release_at.slice(0, genre.release_at.indexOf("T"))}
                  </m.MovieReleaseAt>
                  <m.MovieCountry>{genre.country}</m.MovieCountry>
                </m.MovieInfo>
                <m.Rate>평균★ {genre.rate_avg}</m.Rate>
              </m.Movie>
            ))}
          </m.WrapMovie>
        </m.WrapMovieGenre>
      </m.MovieGenreContainer>

      {/* 페이지 번호 */}
      {pageData && <MovieGenrePagination getMovieList={genre} />}
    </>
  );
};

export default MovieGenre;
