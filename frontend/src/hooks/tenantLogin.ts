export const fetchTenantDomain = async (hospitalId: string) => {
    // Determine API base URL based on environment
    const isLocalhost = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    const apiBaseUrl = isLocalhost
      ? "http://localhost:8000"
      : "https://healthrxai.com"; //productin one..

    const res = await fetch(`${apiBaseUrl}/server/get-domain`, {
      method: "POST", // or GET if that’s the real method
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ hospital_id: hospitalId }),
    });
  
    const data = await res.json();
    if (!data.success) throw new Error("Invalid hospital ID");
  
    return data.domain;
  };
  
  export const loginTenantUser = async (domain: string, email: string, password: string) => {
    const loginRes = await fetch(`${domain}/server/login?api=true`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    const data = await loginRes.json();
  
    if (!loginRes.ok) throw new Error(data.msg || "Tenant login failed");
  
    // Save token and data separately from SaaS login to avoid conflict
    localStorage.setItem("tenantAccessToken", data.access_token.access);
    localStorage.setItem("tenantRefreshToken", data.access_token.refresh);
    localStorage.setItem("tenantDomain", domain);
    localStorage.setItem("tenantUser", JSON.stringify(data));
  
    return data;
  };
  