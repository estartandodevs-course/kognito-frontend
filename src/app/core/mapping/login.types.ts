import { UserProps } from '@store/auth/auth.types';

export interface LoginProps {
  email: string;
  password: string;
}

export interface LoginSuccessProps {
  user: UserProps;
  token: string;
  success: boolean;
  data: {
    accessToken: string;
    expiresIn: number;
    senhaPadrao: boolean;
    usuarioToken: UserProps;
  };
}
