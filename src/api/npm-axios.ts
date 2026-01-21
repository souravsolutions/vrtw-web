import axios from "axios";

const npmApi = axios.create({
  baseURL: import.meta.env.VITE_API_NPM,
});

export default npmApi;
