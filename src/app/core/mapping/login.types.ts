export interface LoginProps {
  email: string;
  password: string;
}

interface ClaimProps {
  value: string;
  type: string;
}

export interface LoginSuccessProps {
  data: {
    accessToken: string;
    usuarioToken: {
      claims: ClaimProps[];
    };
  };
}
