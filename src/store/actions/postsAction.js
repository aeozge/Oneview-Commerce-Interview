import { GET_USER_POSTS } from "../types/types";
import axios from "axios";
import * as error from "../types/errorTypes";

export const postsAction = (id, user) => async (dispatch) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${id}`;
    axios.get(url).then((res) => {
      dispatch({
        type: GET_USER_POSTS,
        payload: { posts: res.data, user },
      });
    });
  } catch (e) {
    dispatch({
      type: error.GET_USER_POSTS_ERROR,
      message: "Please try again",
    });
  }
};
