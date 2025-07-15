import axios from 'axios';
import { getTenant } from '../utils/getTenant';

const tenant = getTenant();

// Build full API base URL
let baseURL: string;
console.log('Detected tenant:', tenant);

if (tenant) {
  baseURL = `https://${tenant}.healthrxai.com/backend`;
} else {
  // fallback for no tenant/subdomain
  baseURL = 'https://healthrxai.com/backend';
}

const api = axios.create({
  baseURL,
  withCredentials: true,
});

export default api;
