export type FormData = {
  email: string;
  password: string;
};

export type ErrorType = {
  email?: string;
  password?: string;
  rememberMe?: string;
};

export type Sonner = {
  message: string;
  type: 'success' | 'error';
};