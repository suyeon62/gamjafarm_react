import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const MovieGenrePagination = ({ getMovieList }) => {
  const { genre } = useParams();
  console.log("ggg", genre);

  const pageInfo = useSelector((state) =>
    state.movie.pageInfo ? state.movie.pageInfo : { currentPage: 1 }
  );

  const pageNumbers = [];
  for (let i = pageInfo.startPage; i <= pageInfo.endPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="..." style={{ display: "flex", justifyContent: "center" }}>
      <ul className="pagination">
        {/* 이전 */}
        <li
          className={
            pageInfo.startPage <= 1 ? "page-item disabled" : "page-item"
          }
        >
          <span
            className="page-link"
            onClick={() =>
              getMovieList(pageInfo.startPage - pageInfo.blockPage, genre)
            }
            style={{
              color: "white",
              backgroundColor: "#333",
              borderColor: "#212529",
            }}
          >
            &laquo;
          </span>
        </li>

        {/* 페이지번호 출력 */}
        {pageNumbers &&
          pageNumbers.map((pnum, idx) => {
            return (
              <li key={pnum}>
                <span
                  onClick={() => getMovieList(pnum, genre)}
                  className="page-link"
                  style={{
                    zIndex: 1,
                    color:
                      pageInfo.currentPage === pnum
                        ? "rgb(255, 5, 88)"
                        : "#ccc",
                    fontWeight:
                      pageInfo.currentPage === pnum ? "bold" : "normal",
                    backgroundColor:
                      pageInfo.currentPage === pnum ? "#000" : "#333",
                    borderColor: "#212529",
                    cursor: "pointer",
                  }}
                >
                  {pnum}
                </span>
              </li>
            );
          })}
        {/* 다음 */}
        <li
          className={
            pageInfo.endPage >= pageInfo.totalPage
              ? "page-item disabled"
              : "page-item"
          }
        >
          <span
            className="page-link"
            onClick={() =>
              getMovieList(pageInfo.startPage + pageInfo.blockPage, genre)
            }
            style={{
              color: "white",
              backgroundColor: "#333",
              borderColor: "#212529",
            }}
          >
            &raquo;
          </span>
        </li>
      </ul>
    </nav>
  );
};

export default MovieGenrePagination;
