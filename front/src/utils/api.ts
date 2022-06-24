import axios from "axios";
import { NavigateFunction } from "react-router-dom";

const BACKEND_PORT = "5001";
const SERVER_URL = `http://${window.location.hostname}:${BACKEND_PORT}`;

// * axios 인스턴스 생성
const axiosApiInstance = axios.create({
  baseURL: SERVER_URL,
});

// Request interceptor for API calls
axiosApiInstance.interceptors.request.use(
  (config: any) => {
    // 요청 성공 직전 호출, axios 설정값 넣기
    const token = localStorage.getItem("token");

    config.headers["Content-Type"] = "application/json";
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // 요청 에러 직전 호출
    return Promise.reject(error);
  }
);

// Request interceptor for API calls
axiosApiInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // 401 에러 : 토큰 재발급 받은 뒤 다시 set & 요청
      if (error.response.status === 401) {
        const newToken = error.response.data.myNewAccessToken;
        localStorage.setItem("token", newToken);

        return axiosApiInstance.request(error.config);
      }

      // 403 에러 : 에러 메시지 alert (비로그인 에러 제외)
      if (error.response.status === 403) {
        const errorMessage = error.response.data.err;
        if (errorMessage) alert(errorMessage);
      }
    }
    return Promise.reject(error);
  }
);

// ! 402 에러 처리 : 나중에 다시 확인 - App.tsx 파일 같이
const axiosInstanceToNavigate = (navigate: NavigateFunction) => {
  axiosApiInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      // 402 에러 : refresh Token 만료 시 (임시저장 후) 로그인 페이지로
      if (error.response && error.response.status === 402) {
        navigate("/signIn");
      }
      return Promise.reject(error);
    }
  );
};

// * POST
async function post(endpoint: string, data: object) {
  const bodyData = JSON.stringify(data);
  console.log(`%cPOST 요청: ${SERVER_URL + endpoint}`, "color: #296aba;");
  console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");

  return axiosApiInstance.post(endpoint, bodyData);
}

// GET
async function get(endpoint: string, params = "") {
  console.log(
    `%cGET 요청 ${SERVER_URL + endpoint}/${params}`,
    "color: #a25cd1;"
  );

  return axiosApiInstance.get(`${SERVER_URL + endpoint}/${params}`);
  // return axios.get(`${SERVER_URL + endpoint}/${params}`, {
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
}

// PUT
async function put(endpoint: string, data: object) {
  const bodyData = JSON.stringify(data);
  console.log(`%cPUT 요청: ${SERVER_URL + endpoint}`, "color: #059c4b;");
  console.log(`%cPUT 요청 데이터: ${bodyData}`, "color: #059c4b;");

  return axiosApiInstance.put(SERVER_URL + endpoint, bodyData);
}

// PATCH
async function patch(endpoint: string, data: object) {
  const bodyData = JSON.stringify(data);
  console.log(`%cPATCH 요청: ${SERVER_URL + endpoint}`, "color: #059c4b;");
  console.log(`%cPATCH 요청 데이터: ${bodyData}`, "color: #059c4b;");

  // return axios.patch(SERVER_URL + endpoint, bodyData, {
  //   headers: {
  //     "Content-Type": "application/json",
  //     // Authorization 추가 (JWT)
  //   },
  // });
  return axiosApiInstance.patch(SERVER_URL + endpoint, bodyData);
}

// DELETE
async function del(endpoint: string, params = "") {
  console.log(`DELETE 요청 ${SERVER_URL + endpoint}/${params}`);

  return axiosApiInstance.delete(`${SERVER_URL + endpoint}/${params}`);
}

export { axiosInstanceToNavigate, get, post, put, patch, del as delete };
