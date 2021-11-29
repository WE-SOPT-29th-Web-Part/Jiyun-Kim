import axios from "axios";

//다회통신 시 사용
export const client = axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      "Content-Type": "application/json",
    },
  });

  export const imageClient = axios.create({
    baseURL: "http://localhost:5000/api/image",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  