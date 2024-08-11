import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // gắn token vào header
    return config;
  },
  function (error) {
    console.log(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // refresh_token
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default instance;
