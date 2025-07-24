import axios from "axios";

const tenantDomain = localStorage.getItem("finaltenantDomain");
console.log("tenant domain",tenantDomain)

const axiosTenant = axios.create({
  baseURL: tenantDomain || "", // fallback if not logged in yet
});
console.log(tenantDomain)
axiosTenant.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  const userPermissions = localStorage.getItem("userPermissions");
  console.log("accessToken:", token); // log the token
  console.log("permissions:", userPermissions); // log the token
  
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosTenant;
