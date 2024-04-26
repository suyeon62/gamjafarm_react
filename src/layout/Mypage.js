import React, { useEffect, useState } from "react";
import { Link, useNavigate, Outlet, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import "./Mypage.css";
import { reviewActions } from "../toolkit/actions/mypageReview_action";

const Mypage = () => {
  const navigate = useNavigate();

  const [daliyCnt, setDailyCnt] = useState(0);
  const [totalCnt, setTotalCnt] = useState(0);
  const [propic, setPropic] = useState("");
  const [caption, setCaption] = useState("");
  const [userfollowings, setUserFollowings] = useState([]);
  const [userfollowers, setUserFollowers] = useState("");
  const [usembti, setUserMbti] = useState("");

  //방문자 수 가져오기 + caption
  const info = async () => {
    try {
      const pathname = window.location.pathname;
      const id = pathname.split("/")[2];
      console.log(id);

      const response = await axios.post(`/mypage/${id}`);
      const data = response.data;
      console.log(data);

      setDailyCnt(data.daliyCnt);
      setTotalCnt(data.totalCnt);
      setCaption(data.userCaption);
      setUserMbti(data.userMbti);

      setUserFollowings(data.userfollowings);
      setUserFollowers(data.userfollowers);
      // setPropic(data.pic);
    } catch (error) {
      console.error("error", error);
    }
  };

  const handleSelectChange = (e) => {
    const selectedValue = e.target.value;
    if (selectedValue) {
      navigate(`/mypage/${selectedValue}`);
      window.location.reload();
    }
  };

  useEffect(() => {
    info();
  }, []);

  return (
    <>
      <div id='mypageLayout'>
        {" "}
        {/*지우는거 */}
        <div id='mypageContainer'>
          {" "}
          {/*background: transparent */}
          <div id='background'>
            <div className='buttonContainer'>
              <Link to=''>
                <button id='home'>home</button>
              </Link>

              <Link to='calendar'>
                <button id='calendar'>Calendar</button>
              </Link>

              <Link to='wish/1'>
                <button id='wish'>Wish</button>
              </Link>

              <Link to='rating'>
                <button id='rating'>Rating</button>
              </Link>

              <Link to='review/1'>
                <button id='review'>Review</button>
              </Link>

              <Link to='setting'>
                <button id='setting'>Setting</button>
              </Link>
            </div>

            {/*프로필(왼쪽) */}
            <div id='profile'>
              {/*프로필사진 */}
              <div className='box profilePic'>
                <img></img>
              </div>

              {/*방문자 수 */}
              <div className='box visitors'>
                <p>
                  <p>오늘 방문자 수:{daliyCnt}</p>
                  <p>모든 방문자 수:{totalCnt}</p>
                </p>
              </div>

              {/*팔로워 팔로잉 */}
              <div className='box follow'>
                <label htmlFor='followings'>팔로잉:</label>
                <select onChange={handleSelectChange}>
                  <option value=''>Following</option>
                  {userfollowings.map((code, idx) => (
                    <option key={idx} value={code}>
                      {code}
                    </option>
                  ))}
                </select>

                <label htmlFor='followers'>팔로워:</label>
                <select>
                  <option value=''>Follower</option>
                  <option>{userfollowers}</option>
                </select>
              </div>

              <div className='line' />

              {/*MBTI */}
              <div className='box mbti'>
                <p>MBTI: {usembti}</p>
              </div>

              {/*한줄소개 */}
              <div className='box aboutMyself'>
                <p>{caption}</p>
              </div>
            </div>

            {/**팔로우 버튼 */}
            <button id='followBtn'>follow</button>

            {/*게시판(가운데) */}
            <div id='board'>
              <div id='boardContainer'>
                <Link to='logout'>
                  <button id='logout'>logout</button>
                </Link>
              </div>
            </div>
          </div>
          {/*가운데 이어주는 링크*/}
          <div className='container'>
            <div className='link' />
            <div className='link' />
          </div>
          <div className='container'>
            <div className='link' />
            <div className='link' />
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Mypage;
