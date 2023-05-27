import axios from "axios";

export const instanceAxios = axios.create({
  baseURL: "http://localhost:3001",
});

instanceAxios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");

    config.headers["Authorization"] = "Bearer " + token;
    config.headers["Content-Type"] = "application/json";
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
