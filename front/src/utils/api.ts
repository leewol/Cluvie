import axios from "axios";
import axiosApiInstance from "./interceptor";

const BACKEND_PORT = "5001";
const SERVER_URL = `http://${window.location.hostname}:${BACKEND_PORT}`;

// POST
async function post(endpoint: string, data: object) {
  const bodyData = JSON.stringify(data);
  console.log(`%cPOST 요청: ${SERVER_URL + endpoint}`, "color: #296aba;");
  console.log(`%cPOST 요청 데이터: ${bodyData}`, "color: #296aba;");

  return axiosApiInstance.post(SERVER_URL + endpoint, bodyData);
}

// GET
async function get(endpoint: string, params = "") {
  console.log(
    `%cGET 요청 ${SERVER_URL + endpoint}/${params}`,
    "color: #a25cd1;"
  );

  // return axiosApiInstance.get(`${SERVER_URL + endpoint}/${params}`);
  return axios.get(`${SERVER_URL + endpoint}/${params}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
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

  return axios.patch(SERVER_URL + endpoint, bodyData, {
    headers: {
      "Content-Type": "application/json",
      // Authorization 추가 (JWT)
    },
  });
}

// DELETE
async function del(endpoint: string, params = "") {
  console.log(`DELETE 요청 ${SERVER_URL + endpoint}/${params}`);

  return axiosApiInstance.delete(`${SERVER_URL + endpoint}/${params}`);
}

export { get, post, put, patch, del as delete };
