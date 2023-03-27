export interface UserResponse {
  statusCode: string;
  statusMessage: string;
  payload: object;
}

export interface UserRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  user_provider: string;
}
