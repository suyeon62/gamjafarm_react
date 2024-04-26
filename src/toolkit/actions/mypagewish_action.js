import axios from "axios";
import { wishReducers } from '../createSlice/mypagewish_createSlice';

function getWishList(currentPage) {
  console.log(currentPage);

  const pathname = window.location.pathname;
  const id = pathname.split('/')[2];
  console.log('id:', id);

  return async (dispatch) => {
    const WishResponse = await axios
      .get(`/wish/${id}/${currentPage}`)
      .then((response) => response.data);
    console.log("data:", WishResponse);

    dispatch(wishReducers.getWishList({
      WishResponse
    }));
  };
}

export const wishActions = {
  getWishList,
};
