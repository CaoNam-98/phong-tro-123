import actionTypes from "./actionType";
import { apiGetPosts } from "../../services/post";

// Middleware thể hiện ở đây là => function
export const getPosts = () => async (dispatch) => {
  try {
    const response = await apiGetPosts();
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.GET_POSTS,
        data: response.data.response,
      });
    } else {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        msg: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.GET_POSTS,
      posts: null,
    });
  }
};
