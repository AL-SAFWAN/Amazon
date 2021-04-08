import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/fir-219de/us-central1/api", // the cloud function url
});

export default instance;
