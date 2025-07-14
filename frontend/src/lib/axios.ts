// src/lib/axios.ts
import axios from 'axios';
import { getTenant } from '../utils/getTenant';

const tenant = getTenant();

const api = axios.create({
  baseURL: `https://${tenant}.healthsrx.com/`, 
  headers: {
    'X-Tenant': tenant || '',
  },
});

export default api;
