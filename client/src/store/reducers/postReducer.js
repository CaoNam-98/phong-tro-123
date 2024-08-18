import actionTypes from "../actions/actionType";

const initState = {
  posts: [],
  msg: "",
};

const postReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.GET_POSTS:
      return {
        ...state,
        posts: action.data || [],
        msg: action.msg || "",
      };

    default:
      return state;
  }
};

export default postReducer;
