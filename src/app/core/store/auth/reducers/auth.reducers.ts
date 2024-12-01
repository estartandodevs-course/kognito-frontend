import { createReducer, on } from '@ngrx/store';
import { refreshToken, refreshTokenSuccess, refreshTokenFailure } from '../actions/auth.actions';

/**
 * Define o estado da autenticação do usuário.
 *
 * @interface AuthState
 * @property {string | null} token - O token de autenticação do usuário.
 * @property {string | null} refreshToken - O token de atualização do usuário.
 * @property {string | null} error - Mensagem de erro caso haja falha na renovação do token.
 */
export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  error: string | null;
}

/**
 * Estado inicial para autenticação.
 */
export const initialState: AuthState = {
  token: null,
  refreshToken: null,
  error: null,
};

/**
 * Redutor para gerenciar as ações de autenticação.
 *
 * Este redutor gerencia o estado de autenticação, incluindo a renovação de token e o sucesso/falha
 * nas tentativas de renovação.
 *
 * @param {AuthState} state - O estado atual da autenticação.
 * @param {Action} action - A ação disparada que pode modificar o estado.
 *
 * @returns {AuthState} O novo estado de autenticação.
 */
export const authReducer = createReducer(
  initialState,
  on(
    refreshToken,
    (state: AuthState): AuthState => ({
      ...state,
      error: null, // Limpa o erro ao tentar renovar o token
    }),
  ),
  on(
    refreshTokenSuccess,
    (state: AuthState, { token }): AuthState => ({
      ...state,
      token, // Atualiza o token com o novo valor
      error: null, // Limpa o erro após sucesso
    }),
  ),
  on(
    refreshTokenFailure,
    (state: AuthState, { error }): AuthState => ({
      ...state,
      error, // Atualiza o erro com a mensagem fornecida pela falha
    }),
  ),
);
