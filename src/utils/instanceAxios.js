import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "localhost:3001",
});

instanceAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

instanceAxios.interceptors.response.use(
  (response) => {
    // block to handle success case
    return response;
  },
  function (error) {
    // block to handle error case
    console.log(error);

    return Promise.reject(error);
  }
);
