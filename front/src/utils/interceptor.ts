import axios from "axios";

// axios 인스턴스 생성
const axiosApiInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
});

const token = localStorage.getItem("token");

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  (config: any) => {
    // 요청 성공 직전 호출, axios 설정값 넣기
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => {
    // 요청 에러 직전 호출
    Promise.reject(error);
  }
);

export default axiosApiInstance;
