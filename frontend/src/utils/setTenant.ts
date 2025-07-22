// src/utils/setTenant.ts


export const setTenant = (tenant: string) => {
    localStorage.setItem('tenant', tenant);
  };