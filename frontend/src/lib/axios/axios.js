import axios from "axios";
import { TMDB_API_BASE_URL } from "../../utils/constants/constants";

const api = axios.create({
  baseURL: TMDB_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.REACT_APP_TMDB_API_KEY}`,
  },
});

export default api;
