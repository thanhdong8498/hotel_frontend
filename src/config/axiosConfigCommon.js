import axios from "axios";
const axiosCommon = () => {
    axios.defaults.baseURL = "http://localhost:3001";

    // Add request interceptor
    axios.interceptors.request.use(
        function (config) {
            // do something before request is sent
            config.headers["authorization"] = "Bearer " + localStorage.getItem("accessToken");
            return config;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
};

export default axiosCommon;
