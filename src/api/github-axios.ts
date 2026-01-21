import axios from "axios";

const githubApi = axios.create({
  baseURL: import.meta.env.VITE_API_GITHUB,
});

export default githubApi;
