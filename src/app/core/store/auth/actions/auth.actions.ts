import { createAction, props } from '@ngrx/store';

/**
 * Ação disparada quando o usuário solicita login.
 */
export const login = createAction('[Auth] Login', props<{ email: string; password: string }>());

/**
 * Ação disparada quando o login do usuário é bem-sucedido.
 */
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string; refreshToken: string }>());

/**
 * Ação disparada quando ocorre uma falha durante o login do usuário.
 */
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

/**
 * Ação disparada quando o usuário faz logout.
 */
export const logout = createAction('[Auth] Logout');

/**
 * Ação para iniciar a renovação do token de autenticação.
 */
export const refreshToken = createAction('[Auth] Refresh Token', props<{ refreshToken: string }>());

/**
 * Ação para indicar o sucesso na renovação do token de autenticação.
 */
export const refreshTokenSuccess = createAction('[Auth] Refresh Token Success', props<{ token: string }>());

/**
 * Ação para indicar falha na renovação do token de autenticação.
 */
export const refreshTokenFailure = createAction('[Auth] Refresh Token Failure', props<{ error: string }>());

/**
 * Ação disparada quando o usuário carrega a role do usuário com sucesso.
 * O payload contém a role do usuário.
 */
export const loadUserRoleSuccess = createAction('[Auth] Load User Role Success', props<{ role: string }>());

/**
 * Ação disparada quando ocorre uma falha ao carregar a role do usuário.
 * O payload contém o erro detalhado.
 */
export const loadUserRoleFailure = createAction('[Auth] Load User Role Failure', props<{ error: string }>());
