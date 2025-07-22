import api from '../lib/axios';
import { getTenant } from '../utils/getTenant';

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface LoginResponse {
  access_token: string;
  refresh_token: string;
}

export const authService = {
  async login(credentials: LoginCredentials): Promise<LoginResponse> {
    try {
      console.log('Attempting login with credentials:', { email: credentials.email });

      const formData = new FormData();
      formData.append('email', credentials.email);
      formData.append('password', credentials.password);

      const url = getTenant() ? `/login?api=true` : '/saas/login?api=true';

      const response = await api.post(url, formData, {
        timeout: 10000,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const { access_token, refresh_token } = response.data;

      localStorage.setItem('authToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);

      const mockUser = {
        id: '1',
        email: credentials.email,
        name: 'Admin User',
        role: 'admin'
      };
      localStorage.setItem('user', JSON.stringify(mockUser));

      console.log('Login successful for user:', mockUser.name);
      return response.data;
    } catch (error: any) {
      console.error('Login error details:', {
        message: error.message,
        status: error.response?.status,
        statusText: error.response?.statusText,
        data: error.response?.data,
        config: error.config
      });

      if (error.code === 'ERR_NETWORK' || error.message.includes('Network Error')) {
        throw new Error('Network error: Unable to connect to the server.');
      }
      if (error.code === 'ECONNABORTED') {
        throw new Error('Request timeout: The server took too long to respond.');
      }
      if (error.response?.status === 401) {
        throw new Error('Invalid email or password');
      }
      if (error.response?.status === 404) {
        throw new Error('Login endpoint not found.');
      }

      throw new Error('Login failed. Please try again.');
    }
  },

  // New method for tenant login
  async loginWithHospitalId(hospitalId: string, email: string, password: string): Promise<LoginResponse> {
    try {
      const res = await fetch('http://localhost:8000/get-domain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ hospital_id: hospitalId })
      });

      const data = await res.json();

      if (!data.success || !data.hospital_name) {
        throw new Error('Invalid hospital ID or hospital not registered.');
      }

      // Save tenant name so getTenant() can access it
      localStorage.setItem('tenant', data.hospital_name);

      // Login using regular login
      return this.login({ email, password });
    } catch (error: any) {
      throw new Error(error.message || 'Failed to resolve tenant domain');
    }
  },

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
    console.log('User logged out successfully');
  },

  getToken(): string | null {
    return localStorage.getItem('authToken');
  },

  getRefreshToken(): string | null {
    return localStorage.getItem('refreshToken');
  },

  getUser(): any {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  },

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
};
