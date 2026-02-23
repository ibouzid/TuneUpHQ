export interface User {
    id: string;
    name: string;
    role: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export interface ApiError {
  message: string;
  code?: number;
}

export interface JwtPayload {
  sub: string;
  name?: string; 
  roles: string[];
  permissions: string[];
  exp: number;
}
export interface LoginRequest {
  username: string;
  password: string;
}
