import axios from "axios";

export default function baseUrl() {
  axios.create({
    baseURL: "http://localhost:5000",
  });
}
