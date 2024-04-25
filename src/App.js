import { Route, Routes, Outlet } from "react-router-dom";
import "./App.css";
import Login from "./login_pages/Login";
import Policy from "./login_pages/Policy";
import Signup from "./login_pages/Signup";
import Mypage from "./layout/Mypage";
import Calendar from "./mypage/Calendar";
import Setting from "./mypage/Setting";
import EditInfo from "./mypage/EditInfo";
import Changepw from "./mypage/Changepw";
import Wish from "./mypage/Wish";
import Rating from "./mypage/Rating";
import Review from "./mypage/Review";
import Logout from "./login_pages/Logout";
import Headers from "./components/Headers";
import Footers from "./components/Footers";
import UserRemove from "./mypage/UserRemove";

import Main from "./pages/Main/Main";
import ReviewMain from "./pages/Review/ReviewMain";
import ReviewDetails from "./pages/Review/ReviewDetails";
import MovieInfo from "./pages/Movie/MovieInfo";
import MovieInfoComments from "./pages/Movie/MovieInfoComments";
import DailyBoxoffice from "./pages/Boxoffice/DailyBoxoffice";
import MonthlyBoxoffice from "./pages/Boxoffice/MonthlyBoxoffice";
import MovieGenre from "./pages/Movie/MovieGenre";

function App() {
  return (
    <div>
      <Headers className="header"></Headers>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="policy" element={<Policy />} />
        <Route path="signup" element={<Signup />} />

        <Route path="mypage/:id" element={<Mypage />}>
          {/* <Route index element={<Mypage />} /> */}
          <Route path="calendar" element={<Calendar />} />
          <Route path="wish" element={<Wish />} />
          <Route path="rating" element={<Rating />} />
          <Route path="review" element={<Review />} />
          <Route path="setting" element={<Setting />} />
          <Route path="logout" element={<Logout />} />
          <Route path="setting/editinfo" element={<EditInfo />} />
          <Route path="setting/editinfo/changepw" element={<Changepw />} />
          <Route path="setting/editinfo/userremove" element={<UserRemove />} />
        </Route>

        <Route path="/" element={<Main />} />
        <Route path="/:genre/:currentPage" element={<MovieGenre />} />
        <Route path="/movie/:code" element={<MovieInfo />} />
        <Route path="/movie/:code/comments" element={<MovieInfoComments />} />
        <Route path="/boxoffice" element={<DailyBoxoffice />} />
        <Route path="/boxoffice/monthly" element={<MonthlyBoxoffice />} />
        <Route
          path="/playground/review/:currentPage"
          element={<ReviewMain />}
        />
        <Route
          path="/playground/review/detail/:idx"
          element={<ReviewDetails />}
        />
      </Routes>
      <Outlet />
      <Footers className="footer"></Footers>
    </div>
  );
}

export default App;
