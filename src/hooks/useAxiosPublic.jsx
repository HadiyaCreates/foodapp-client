import axios from "axios";

const axiosPublic = axios.create({
  // baseURL: "https://foodapp-server-myfu.onrender.com/",
  // baseURL: import.meta.env.VITE_API_URL,
  baseURL: "http://localhost:6001",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
