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
import { AuthState } from '../../../model/auth-state.model';

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
 * Redutor para gerenciar as ações de autenticação.
 */
export const authReducer = createReducer(
  initialState,
  /**
   * Ação de login.
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
   */
  on(
    logout,
    (): AuthState => ({
      ...initialState,
    }),
  ),

  /**
   * Início da renovação do token.
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
   */
  on(
    loadUserRoleFailure,
    (state, { error }): AuthState => ({
      ...state,
      error,
    }),
  ),
);
