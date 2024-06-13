import axios from "axios";

let customAxios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token"), // Added space after "Bearer"
    Accept: "*/*",
    "Content-Type": "application/json",
  },
  timeout: 5000,
});

export default customAxios;
