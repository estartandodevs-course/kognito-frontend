/**
 * Interface para os dados do usuário autenticado.
 */
export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

/**
 * Interface para o estado de autenticação.
 */
export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  error: string | null;
  user: User | null;
  role: string | null;
}
