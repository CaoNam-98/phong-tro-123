import actionTypes from "../actions/actionType";

const initState = {
  posts: [],
  msg: "",
  count: 0,
  newPosts: [],
};

const postReducer = (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case actionTypes.GET_POSTS:
    case actionTypes.GET_POSTS_LIMIT:
      return {
        ...state,
        posts: action.posts || [],
        msg: action.msg || "",
        count: action.count || 0,
      };

    case actionTypes.GET_NEW_POST:
      console.log('hahha1: ', action.newPosts);
      return {
        ...state,
        newPosts: action.newPosts || [],
        msg: action.msg || "",
      };

    default:
      return state;
  }
};

export default postReducer;
