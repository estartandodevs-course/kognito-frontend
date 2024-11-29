import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout } from '../actions/auth.actions';

/**
 * Define o estado inicial para a autenticação do usuário.
 *
 * @interface AuthState
 * @property {string | null} token - O token de autenticação do usuário.
 * @property {string | null} refreshToken - O token de atualização do usuário.
 * @property {string | null} error - Mensagem de erro caso haja falha na autenticação.
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
 * Este redutor gerencia o estado de autenticação, incluindo o sucesso do login e o logout.
 *
 * @param {AuthState} state - O estado atual da autenticação.
 * @param {Action} action - A ação disparada que pode modificar o estado.
 *
 * @returns {AuthState} O novo estado de autenticação.
 */
export const authReducer = createReducer(
  initialState,
  on(
    loginSuccess,
    /**
     * Atualiza o estado com os tokens após um login bem-sucedido.
     *
     * @param {AuthState} state - O estado atual da autenticação.
     * @param {object} payload - O payload da ação, que inclui os tokens de autenticação.
     * @param {string} payload.token - O token de autenticação.
     * @param {string} payload.refreshToken - O token de atualização.
     *
     * @returns {AuthState} O novo estado com os tokens atualizados e sem erros.
     */
    (state, { token, refreshToken }): AuthState => ({
      ...state,
      token,
      refreshToken,
      error: null,
    }),
  ),
  on(logout, (): AuthState => initialState),
);
