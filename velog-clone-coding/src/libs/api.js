import axios from "axios";

//다회통신 시 사용
export const client = axios.create({
    baseURL: "http://localhost:4000/",
    headers: {
      "Content-Type": "application/json",
    },
  });
  