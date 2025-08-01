// src/lib/axios.ts
import axios from "axios";
import { getTenant } from "../utils/getTenant";

const tenant = getTenant();

// Build full API base URL
let baseURL: string;
console.log("Detected tenant:", tenant);

if (
  window.location.hostname === "localhost" ||
  window.location.hostname === "127.0.0.1"
) {
  // Local development API endpoint
  if (tenant) {
    // Use tenant-specific local endpoint
    baseURL = `http://${tenant}.localhost:8000/server`;
  } else {
    baseURL = "http://localhost:8000/server";
  }
} else if (tenant) {
  baseURL = `https://${tenant}.healthrxai.com/server`;
} else {
  baseURL = "https://healthrxai.com/server";
}

baseURL = "https://healthrxai.com/server";

const api = axios.create({
  baseURL,
  withCredentials: true,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");
  console.log(token, "token in axios interceptor");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
