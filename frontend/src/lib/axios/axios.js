import axios from "axios";
import { TMDB_API_BASE_URL } from "../../utils/constants";

const api = axios.create({
  baseURL: TMDB_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.TMDB_API_KEY}`,
  },
});

export default api;
