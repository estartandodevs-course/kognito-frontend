import { Injectable } from '@angular/core';
import { createReducer, on } from '@ngrx/store';
import { AuthTokenService } from '../../../services/auth/services/auth-token';
import { loginSuccess, loginFailure, logout, refreshTokenSuccess, refreshTokenFailure } from '../actions/auth.actions';

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
 * Redutor para gerenciar as ações de autenticação, com integração ao AuthTokenService.
 *
 * Este redutor manipula o estado de autenticação, realizando operações como login,
 * logout, renovação de token e tratamento de falhas de autenticação. Além disso,
 * armazena e recupera os tokens de autenticação e renovação através do AuthTokenService.
 *
 * @param tokenService - Serviço utilizado para armazenar e recuperar tokens.
 * @returns Um novo estado de autenticação baseado nas ações disparadas.
 */
@Injectable()
export class AuthReducer {
  constructor(private tokenService: AuthTokenService) {}

  /**
   * Redutor para as ações de autenticação.
   *
   * @param state - O estado atual da autenticação.
   * @param action - Ação disparada que pode modificar o estado.
   *
   * @returns O novo estado de autenticação.
   */
  authReducer = createReducer(
    initialState,
    on(loginSuccess, (state: AuthState, { token, refreshToken }): AuthState => {
      this.tokenService.storeToken(token);
      this.tokenService.storeRefreshToken(refreshToken);

      return {
        ...state,
        token,
        refreshToken,
        error: null,
      };
    }),
    on(
      loginFailure,
      (state: AuthState, { error }): AuthState => ({
        ...state,
        error,
      }),
    ),
    on(logout, (state: AuthState): AuthState => {
      this.tokenService.clearTokens();
      return {
        ...state,
        token: null,
        refreshToken: null,
        error: null,
      };
    }),
    on(refreshTokenSuccess, (state: AuthState, { token }): AuthState => {
      this.tokenService.storeToken(token);
      return {
        ...state,
        token,
        error: null,
      };
    }),
    on(
      refreshTokenFailure,
      (state: AuthState, { error }): AuthState => ({
        ...state,
        error,
      }),
    ),
  );
}
