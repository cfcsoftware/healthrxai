export const getTenant = (): string | null => {
  const hostname = window.location.hostname;

  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return localStorage.getItem('tenant');  // use tenant stored from get-domain
  }

  const parts = hostname.split('.');

  if (hostname.endsWith('.localhost') && parts.length === 2) {
    return parts[0];
  }

  if (parts.length >= 3) {
    return parts[0];
  }

  return null;
};
