export interface UserProps {
  name: string;
  role: string;
}

export interface AuthStateProps {
  user: UserProps | null;
  token: string | null;
  isAuthenticated: boolean;
  loading: boolean;
}
