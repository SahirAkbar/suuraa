import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://172.233.58.103:3000/api",
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
export default axiosInstance;
