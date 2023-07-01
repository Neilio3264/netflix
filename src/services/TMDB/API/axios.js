import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 5000,
  headers: {
    Accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_API_READ_KEY,
  },
});

export default instance;
