import React, { useEffect, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const MovieGenrePagination = () => {
  const [pageData, setPageData] = useState([]);

  const { genre, currentPage } = useParams();

  useEffect(() => {
    const fetchGenreData = async () => {
      try {
        const pageResponse = await axios.get(`/movie/${genre}/${currentPage}`);
        setPageData(pageResponse.data.pageInfo);
        console.log("page", pageData);
      } catch (error) {
        console.error("Error fetching movie data:", error);
      }
    };

    fetchGenreData(); // 영화 정보를 가져오는 함수 호출
  }, [genre, currentPage]);

  //     const pageInfo = useSelector((state) =>
  //     state.review.pageInfo ? state.review.pageInfo : { currentPage: 1 }
  //   );

  const pageNumbers = [];
  for (let i = pageData.startPage; i <= pageData.endPage; i++) {
    pageNumbers.push(i);
  }
  return (
    <nav aria-label="..." style={{ display: "flex", justifyContent: "center" }}>
      <ul className="pagination">
        {/* 이전 */}
        <li
          className={
            pageData.startPage <= 1 ? "page-item disabled" : "page-item"
          }
        >
          <span
            className="page-link"
            onClick={() => setPageData(pageData.startPage - pageData.blockPage)}
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
                  onClick={() => setPageData(pnum)}
                  className="page-link"
                  style={{
                    zIndex: 1,
                    color:
                      pageData.currentPage === pnum
                        ? "rgb(255, 5, 88)"
                        : "#ccc",
                    fontWeight:
                      pageData.currentPage === pnum ? "bold" : "normal",
                    backgroundColor:
                      pageData.currentPage === pnum ? "#000" : "#333",
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
            pageData.endPage >= pageData.totalPage
              ? "page-item disabled"
              : "page-item"
          }
        >
          <span
            className="page-link"
            onClick={() => setPageData(pageData.startPage + pageData.blockPage)}
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
