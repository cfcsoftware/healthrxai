// src/services/authService.tsx

import api from "../lib/axios";
import { getTenant } from "../utils/getTenant";

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  access: string;
  refresh: string;
  expires_in: number; // Assuming the API provides token expiry time in seconds
}

const TOKEN_KEY = "authToken";
const REFRESH_TOKEN_KEY = "refreshToken";
const USER_KEY = "user";
const TOKEN_EXPIRY_KEY = "tokenExpiry";

const tokenStorage = {
  setTokens(access: string, refresh: string, expiresIn: number) {
    const expiryTime = Date.now() + expiresIn * 1000; // Convert seconds to milliseconds
    localStorage.setItem(TOKEN_KEY, access);
    localStorage.setItem(REFRESH_TOKEN_KEY, refresh);
    localStorage.setItem(TOKEN_EXPIRY_KEY, expiryTime.toString());
  },
  getAccessToken(): string | null {
    const expiryTime = parseInt(
      localStorage.getItem(TOKEN_EXPIRY_KEY) || "0",
      10
    );
    if (Date.now() > expiryTime) {
      console.warn("Access token expired");
      return null;
    }
    return localStorage.getItem(TOKEN_KEY);
  },
  getRefreshToken(): string | null {
    return localStorage.getItem(REFRESH_TOKEN_KEY);
  },
  clearTokens() {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_TOKEN_KEY);
    localStorage.removeItem(TOKEN_EXPIRY_KEY);
  },
};

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      console.log("Attempting login with credentials:", {
        email: credentials.email,
      });

      const formData = new FormData();
      formData.append("email", credentials.email);
      formData.append("password", credentials.password);
      const url = getTenant() ? `/login?api=true` : "/saas/login?api=true";

      const response = await api.post(url, formData, {
        timeout: 10000,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      const {
        access: access_token,
        refresh: refresh_token,
        expires_in,
      } = response.data;

      // Store tokens securely
      tokenStorage.setTokens(access_token, refresh_token, expires_in);

      // Create a mock user object for the frontend
      const mockUser = {
        id: "1",
        email: credentials.email,
        name: "Admin User",
        role: "admin",
      };
      localStorage.setItem(USER_KEY, JSON.stringify(mockUser));

      console.log("Login successful for user:", mockUser.name);
      return response.data;
    } catch (error: any) {
      console.error("Login error details:", {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        config: error.config,
      });

      // Handle specific error types
      if (
        error.code === "ERR_NETWORK" ||
        error.message.includes("Network Error")
      ) {
        throw new Error(
          "Network error: Unable to connect to the server. Please check your internet connection."
        );
      }

      if (error.message.includes("CORS") || error.code === "ERR_CORS") {
        throw new Error(
          "CORS error: The server is not configured to accept requests from this domain. Please contact the administrator."
        );
      }

      if (error.code === "ECONNABORTED") {
        throw new Error(
          "Request timeout: The server took too long to respond. Please try again."
        );
      }

      if (error.response?.status === 401) {
        throw new Error("Invalid email or password");
      } else if (error.response?.status === 400) {
        throw new Error(error.response.data.message || "Invalid credentials");
      } else if (error.response?.status === 403) {
        throw new Error(
          "Access denied: You do not have permission to access this resource."
        );
      } else if (error.response?.status === 404) {
        throw new Error(
          "Login endpoint not found. Please check the API configuration."
        );
      } else if (error.response?.status >= 500) {
        throw new Error(
          "Server error: The server is experiencing issues. Please try again later."
        );
      } else {
        throw new Error("Login failed. Please try again.");
      }
    }
  },

  logout(): void {
    tokenStorage.clearTokens();
    localStorage.removeItem(USER_KEY);
    console.log("User logged out successfully");
  },

  getToken(): string | null {
    return tokenStorage.getAccessToken();
  },

  getRefreshToken(): string | null {
    return tokenStorage.getRefreshToken();
  },

  getUser(): any {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  },
};
