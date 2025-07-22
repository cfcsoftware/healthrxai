// src/lib/domainService.ts

import axios from 'axios';

export const fetchTenantDomain = async (hospitalId: string) => {
  const baseUrl = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
    ? 'http://localhost:8000/server'
    : 'https://healthrxai.com/server';

  const response = await axios.post(`${baseUrl}/get-domain`, {
    hospital_id: hospitalId,
  });
  return response.data;
};
