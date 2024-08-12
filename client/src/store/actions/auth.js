import actionTypes from "./actionType";
import { apiRegister, apiLogin } from "../../services/auth";

// Middleware thể hiện ở đây là => function
export const register = (payload) => async (dispatch) => {
  try {
    const response = await apiRegister(payload);
    console.log(response);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.REGISTER_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionTypes.REGISTER_FAIL,
        data: response.data.msg,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.REGISTER_FAIL,
      data: null,
    });
  }
};

export const login = (payload) => async (dispatch) => {
  try {
    const response = await apiLogin(payload);
    console.log(response);
    if (response?.data.err === 0) {
      dispatch({
        type: actionTypes.LOGIN_SUCCESS,
        data: response.data.token,
      });
    } else {
      dispatch({
        type: actionTypes.LOGIN_FAIL,
        data: response.data.mes,
      });
    }
  } catch (error) {
    dispatch({
      type: actionTypes.LOGIN_FAIL,
      data: null,
    });
  }
};

// Không cần gọi API nên chỉ cần dispatch với 1 object mà thôi
export const logout = () => ({
  type: actionTypes.LOGOUT,
});
