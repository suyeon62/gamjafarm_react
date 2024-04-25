import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { StyleSheetManager } from "styled-components";
import graystar from "../../images/graystar.png";
import userImage from "../../images/userImage.png";
import likeImage from "../../images/likeImage.png";
import commentImage from "../../images/commentImage.png";
import arrowleft from "../../images/arrow-left.png";
import arrowright from "../../images/arrow-right.png";
import { scrollLeft, scrollRight } from "../../Hook/scrollFunctions";
import * as m from "../../Styles/Movie/MovieInfoStyle";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { reviewActions } from "../../toolkit/actions/review_action";
import ReviewWritePopup from "../Review/ReviewWritePopup";

const MovieInfo = () => {
  const [moviesData, setMoviesData] = useState([]);

  const { code } = useParams();
  // console.log("code>>>>", code);

  const dispatch = useDispatch();

  useEffect(() => {
    getMovieReviewList(code);
    const fetchMoviesData = async () => {
      try {
        const response = await axios.get(`/movie/${code}`);
        setMoviesData(response.data);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchMoviesData();
  }, []);

  const getMovieReviewList = (code) => {
    dispatch(reviewActions.getMovieReviewList(code));
  };
  const movieReviewList = useSelector((state) => state.review.movieReviewList);

  //팝업
  const [popupOpen, setPopupOpen] = useState(false);

  // 팝업 열기 함수
  const openPopup = () => {
    setPopupOpen(true);
  };

  // 팝업 닫기 함수
  const closePopup = () => {
    setPopupOpen(false);
  };

  const getReleaseDate = () => {
    if (!moviesData.release_at) return ""; // release_at 값이 없는 경우 빈 문자열 반환
    return moviesData.release_at.split("T")[0]; // "T"를 기준으로 나눈 후 첫 번째 요소인 날짜 정보만 반환
  };

  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "imageUrl"}>
      <>
        <m.Movie key={moviesData.code}>
          <m.MoviePage>
            <m.MovieInfoContainer>
              <m.MovieBackgroundImg imageUrl={moviesData.stillcut_1}>
                <m.MovieBackground>
                  <m.WrapMovieInfo>
                    <m.MovieTitle>
                      <m.MovieNameKor>{moviesData.name_kor}</m.MovieNameKor>
                      <m.MovieNameEng>{moviesData.name_eng}</m.MovieNameEng>
                      <m.MovieInfo1>
                        <m.MovieReleaseAt>{getReleaseDate()}</m.MovieReleaseAt>
                        <m.MovieGenre>
                          · {moviesData.genre_1 && `${moviesData.genre_1} `}
                          {moviesData.genre_1 && moviesData.genre_2 && "· "}
                          {moviesData.genre_2 && `${moviesData.genre_2} `}
                        </m.MovieGenre>
                        <m.MovieCountry>· {moviesData.country}</m.MovieCountry>
                      </m.MovieInfo1>

                      <m.MovieInfo2>
                        <m.RunningTime>
                          {moviesData.running_time}분{" "}
                        </m.RunningTime>
                        <m.MovieAgeType>· {moviesData.age_type}</m.MovieAgeType>
                      </m.MovieInfo2>
                      <m.MovieInfo3>
                        {moviesData.total_audience && (
                          <m.TotalAudience>
                            누적 관객 {moviesData.total_audience}명
                          </m.TotalAudience>
                        )}
                      </m.MovieInfo3>
                    </m.MovieTitle>
                  </m.WrapMovieInfo>
                </m.MovieBackground>
              </m.MovieBackgroundImg>
            </m.MovieInfoContainer>

            <m.MovieContents>
              <m.MovieContentsContainer>
                <m.LeftMovieContentsContainer>
                  <m.Poster src={moviesData.poster} alt="포스터"></m.Poster>
                </m.LeftMovieContentsContainer>
                <m.RightMovieContentsContainer>
                  <m.TopContents>
                    <m.UserMovieRate>userMovieRate</m.UserMovieRate>
                    <m.WrapRate>
                      <m.Rate>평점</m.Rate>
                      <m.RateAvg>{moviesData.rate_avg}</m.RateAvg>
                    </m.WrapRate>
                    <m.UserMovieWish>userMovieWish</m.UserMovieWish>
                    <m.UserComment onClick={openPopup}>
                      userReview
                    </m.UserComment>
                  </m.TopContents>
                  <m.BottomContents>
                    <m.MoviePlot>{moviesData.plot}</m.MoviePlot>
                  </m.BottomContents>
                </m.RightMovieContentsContainer>
              </m.MovieContentsContainer>

              {moviesData.director_1 ||
              moviesData.director_2 ||
              moviesData.actor_1 ||
              moviesData.actor_2 ||
              moviesData.actor_3 ||
              moviesData.actor_4 ||
              moviesData.actor_5 ? (
                <m.MoviePeople>
                  <m.MoviePeopleTitle>출연/제작</m.MoviePeopleTitle>
                  <m.MoviePeopleName>
                    {moviesData.director_1 && (
                      <m.MovieDirector>
                        {moviesData.director_1} (감독)
                      </m.MovieDirector>
                    )}
                    {moviesData.director_2 && (
                      <m.MovieDirector>
                        {moviesData.director_2} (감독)
                      </m.MovieDirector>
                    )}
                    {moviesData.actor_1 && (
                      <m.MovieActor>{moviesData.actor_1} (배우)</m.MovieActor>
                    )}
                    {moviesData.actor_2 && (
                      <m.MovieActor>{moviesData.actor_2} (배우)</m.MovieActor>
                    )}
                    {moviesData.actor_3 && (
                      <m.MovieActor>{moviesData.actor_3} (배우)</m.MovieActor>
                    )}
                    {moviesData.actor_4 && (
                      <m.MovieActor>{moviesData.actor_4} (배우)</m.MovieActor>
                    )}
                    {moviesData.actor_5 && (
                      <m.MovieActor>{moviesData.actor_5} (배우)</m.MovieActor>
                    )}
                  </m.MoviePeopleName>
                </m.MoviePeople>
              ) : null}

              <m.UserReview
                style={{
                  marginBottom:
                    moviesData.stillcut_1 &&
                    moviesData.stillcut_2 &&
                    moviesData.stillcut_3
                      ? 0
                      : 60,
                }}
              >
                <m.UserReviewTitleContainer>
                  <m.WrapUserReviewTitle>
                    <m.UserReviewTitle>리뷰</m.UserReviewTitle>
                    <m.UserReviewCnt>userReviewCnt</m.UserReviewCnt>
                  </m.WrapUserReviewTitle>
                  <m.MoreBtn to={`/movie/${code}/review`}>더보기</m.MoreBtn>
                </m.UserReviewTitleContainer>

                <m.UserReviewContentsContainer>
                  {movieReviewList.slice(0, 8).map((review) => (
                    <m.WrapUserReviewContents key={review.idx}>
                      <m.UserReviewContentsTitleContainer>
                        <m.WrapUserReviewContentsTitle
                          to={`/mypage/${review.user_id}`}
                        >
                          <m.UserImage
                            src={userImage}
                            alt="유저 이미지"
                          ></m.UserImage>
                          <m.UserName>{review.user_id}</m.UserName>
                        </m.WrapUserReviewContentsTitle>
                        <m.MovieRate>
                          <m.RateImage
                            src={graystar}
                            alt="별점 이미지"
                          ></m.RateImage>
                          <m.UserRate>userRate</m.UserRate>
                        </m.MovieRate>
                      </m.UserReviewContentsTitleContainer>

                      <m.UserReviewContents>
                        {/* <m.UserReviewContentsMain
                      to={`/playground/comments/detail/${view.idx}`}
                    > */}
                        <m.UserReviewContentsMain
                          to={`/playground/review/detail/${review.idx}`}
                        >
                          {review.review}
                        </m.UserReviewContentsMain>
                      </m.UserReviewContents>

                      <m.ActiveArea>
                        <m.Like>
                          <m.LikeImg
                            src={likeImage}
                            alt="좋아요 이미지"
                          ></m.LikeImg>
                          <m.LikeCnt>{review.total_likes_cnt}</m.LikeCnt>
                        </m.Like>
                        <m.UserReviewComment>
                          <m.UserReviewCommentImg
                            src={commentImage}
                            alt="댓글 이미지"
                          ></m.UserReviewCommentImg>
                          <m.UserReviewCommentCnt>
                            {review.total_comment_cnt}
                          </m.UserReviewCommentCnt>
                        </m.UserReviewComment>
                      </m.ActiveArea>
                    </m.WrapUserReviewContents>
                  ))}
                </m.UserReviewContentsContainer>
              </m.UserReview>

              {moviesData.stillcut_1 &&
                moviesData.stillcut_2 &&
                moviesData.stillcut_3 && (
                  <m.Stillcut
                    style={{ marginBottom: moviesData.teaser ? 0 : 60 }}
                  >
                    <m.StillcutTitle>갤러리</m.StillcutTitle>
                    <m.StillcutContentsContainer>
                      <m.WrapStillcutContents>
                        <m.StillcutContents
                          imageUrl={moviesData.stillcut_1}
                        ></m.StillcutContents>
                        <m.StillcutContents
                          imageUrl={moviesData.stillcut_2}
                        ></m.StillcutContents>
                        <m.StillcutContents
                          imageUrl={moviesData.stillcut_3}
                        ></m.StillcutContents>
                      </m.WrapStillcutContents>
                    </m.StillcutContentsContainer>
                  </m.Stillcut>
                )}

              {moviesData.teaser && (
                <m.Teaser>
                  <m.TeaserTitle>동영상</m.TeaserTitle>
                  <m.TeaserContentsContainer>
                    <m.WrapTeaserContents>
                      <m.TeaserLink
                        to={moviesData.teaser}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <m.TeaserContents>예고</m.TeaserContents>
                      </m.TeaserLink>
                    </m.WrapTeaserContents>
                  </m.TeaserContentsContainer>
                </m.Teaser>
              )}
            </m.MovieContents>
          </m.MoviePage>
        </m.Movie>

        {popupOpen && (
          <ReviewWritePopup popupOpen={popupOpen} closePopup={closePopup} />
        )}
      </>
    </StyleSheetManager>
  );
};

export default MovieInfo;
