export const getTenant = (): string => {
  const { hostname } = window.location;
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return 'localhost';
  }
  const subdomain = hostname.split('.')[0];
  return subdomain || 'default';
};
