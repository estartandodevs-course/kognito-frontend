import { AuthStateProps } from './auth.types';

export const initialAuthState: AuthStateProps = {
  user: null,
  token: null,
  loading: false,
  isAuthenticated: false,
};
