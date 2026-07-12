import axios from "axios";

const axiosInstance = axios.create({
  baseURL:
    "https://bookstore-d5ab3-default-rtdb.asia-southeast1.firebasedatabase.app",
});

export default axiosInstance;