export const getTenant = (): string | null => {
  const hostname = window.location.hostname;

  if (hostname === "localhost" || hostname === "127.0.0.1") {
    return null;
  }

  const parts = hostname.split(".");

  // Dev mode: cityhospital.localhost → ["cityhospital", "localhost"]
  if (hostname.endsWith(".localhost") && parts.length === 2) {
    return parts[0];
  }

  // Production: cityhospital.healthrxai.com or www.healthrxai.com
  if (parts.length >= 3) {
    const subdomain = parts[0];

    // Ignore 'www' subdomain
    if (subdomain === "www") {
      return null;
    }

    return subdomain;
  }

  return null;
};
