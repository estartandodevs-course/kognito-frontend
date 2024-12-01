import { Injectable } from '@angular/core';
import { createReducer, on } from '@ngrx/store';
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  refreshToken,
  refreshTokenSuccess,
  refreshTokenFailure,
  loadUserRoleSuccess,
  loadUserRoleFailure,
} from '../actions/auth.actions';
import { AuthState } from './auth-state.model';

/**
 * Estado inicial para autenticação.
 */
export const initialState: AuthState = {
  token: null,
  refreshToken: null,
  error: null,
  user: null,
  role: null, // Inicializando a role do usuário como null
};

/**
 * Serviço de redução para gerenciar as ações de autenticação.
 * Este serviço é responsável por tratar ações relacionadas à autenticação,
 * incluindo login, logout, renovação de tokens e gerenciamento de roles de usuário.
 */
@Injectable()
export class AuthReducer {
  /**
   * Redutor principal que gerencia o estado de autenticação com base nas ações disparadas.
   */
  authReducer = createReducer(
    initialState,
    /**
     * Ação de login.
     * Reseta erros anteriores quando uma solicitação de login é iniciada.
     *
     * @param state - Estado atual.
     * @returns Estado atualizado com erro definido como `null`.
     */
    on(
      login,
      (state): AuthState => ({
        ...state,
        error: null,
      }),
    ),

    /**
     * Sucesso no login.
     * Atualiza o estado com tokens recebidos e reseta erros.
     *
     * @param state - Estado atual.
     * @param token - Token de autenticação.
     * @param refreshToken - Token de renovação.
     * @returns Estado atualizado com tokens e sem erros.
     */
    on(
      loginSuccess,
      (state, { token, refreshToken }): AuthState => ({
        ...state,
        token,
        refreshToken,
        error: null,
      }),
    ),

    /**
     * Falha no login.
     * Atualiza o estado com o erro recebido.
     *
     * @param state - Estado atual.
     * @param error - Detalhes do erro.
     * @returns Estado atualizado com o erro.
     */
    on(
      loginFailure,
      (state, { error }): AuthState => ({
        ...state,
        error,
      }),
    ),

    /**
     * Logout.
     * Reseta o estado para o inicial.
     *
     * @returns Estado inicial.
     */
    on(
      logout,
      (): AuthState => ({
        ...initialState,
      }),
    ),

    /**
     * Início da renovação do token.
     * Reseta erros ao iniciar uma solicitação de renovação de token.
     *
     * @param state - Estado atual.
     * @returns Estado atualizado com erro definido como `null`.
     */
    on(
      refreshToken,
      (state): AuthState => ({
        ...state,
        error: null,
      }),
    ),

    /**
     * Sucesso na renovação do token.
     * Atualiza o estado com o novo token.
     *
     * @param state - Estado atual.
     * @param token - Novo token de autenticação.
     * @returns Estado atualizado com o novo token e sem erros.
     */
    on(
      refreshTokenSuccess,
      (state, { token }): AuthState => ({
        ...state,
        token,
        error: null,
      }),
    ),

    /**
     * Falha na renovação do token.
     * Atualiza o estado com o erro recebido.
     *
     * @param state - Estado atual.
     * @param error - Detalhes do erro.
     * @returns Estado atualizado com o erro.
     */
    on(
      refreshTokenFailure,
      (state, { error }): AuthState => ({
        ...state,
        error,
      }),
    ),

    /**
     * Sucesso ao carregar a role do usuário.
     * Atualiza o estado com a role do usuário.
     *
     * @param state - Estado atual.
     * @param role - Role do usuário.
     * @returns Estado atualizado com a role do usuário.
     */
    on(
      loadUserRoleSuccess,
      (state, { role }): AuthState => ({
        ...state,
        role,
        error: null,
      }),
    ),

    /**
     * Falha ao carregar a role do usuário.
     * Atualiza o estado com o erro recebido.
     *
     * @param state - Estado atual.
     * @param error - Detalhes do erro.
     * @returns Estado atualizado com o erro.
     */
    on(
      loadUserRoleFailure,
      (state, { error }): AuthState => ({
        ...state,
        error,
      }),
    ),
  );
}
