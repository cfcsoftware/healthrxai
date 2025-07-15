export const getTenant = (): string | null => {
  const hostname = window.location.hostname;

  // Catch localhost cases
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return null;
  }

  const parts = hostname.split('.');

  // Dev mode: cityhospital.localhost → ["cityhospital", "localhost"]
  if (hostname.endsWith('.localhost') && parts.length === 2) {
    return parts[0]; // "cityhospital"
  }

  // Production: cityhospital.healthrxai.com → ["cityhospital", "healthrxai", "com"]
  if (parts.length >= 3) {
    return parts[0];
  }

  return null;
};
