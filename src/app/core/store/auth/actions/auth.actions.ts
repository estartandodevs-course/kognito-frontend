import { createAction, props } from '@ngrx/store';

/**
 * Ação disparada quando o usuário solicita login.
 *
 * Esta ação é usada para enviar as credenciais de login (e-mail e senha)
 * para o backend, que realizará a autenticação.
 *
 * @param {string} email - O endereço de e-mail do usuário tentando fazer login.
 * @param {string} password - A senha do usuário.
 *
 * @example
 * // Disparo da ação login
 * this.store.dispatch(login({ email: 'user@example.com', password: '1234' }));
 */
export const login = createAction('[Auth] Login', props<{ email: string; password: string }>());

/**
 * Ação disparada quando o login do usuário é bem-sucedido.
 *
 * Após a autenticação bem-sucedida, o servidor envia um token de acesso
 * e um refresh token que são armazenados para manter o usuário autenticado.
 *
 * @param {string} token - O token de acesso gerado pelo backend após a autenticação bem-sucedida.
 * @param {string} refreshToken - O token de atualização (refresh token) gerado pelo backend.
 *
 * @example
 * // Disparo da ação loginSuccess
 * this.store.dispatch(loginSuccess({ token: 'access_token_123', refreshToken: 'refresh_token_123' }));
 */
export const loginSuccess = createAction('[Auth] Login Success', props<{ token: string; refreshToken: string }>());

/**
 * Ação disparada quando ocorre uma falha durante o login do usuário.
 *
 * Se as credenciais fornecidas não forem válidas ou se ocorrer um erro
 * no servidor, esta ação será disparada, juntamente com uma mensagem de erro.
 *
 * @param {string} error - Mensagem de erro detalhando o motivo da falha no login.
 *
 * @example
 * // Disparo da ação loginFailure
 * this.store.dispatch(loginFailure({ error: 'Credenciais inválidas' }));
 */
export const loginFailure = createAction('[Auth] Login Failure', props<{ error: string }>());

/**
 * Ação disparada quando o usuário faz logout.
 *
 * Esta ação é usada para limpar os dados de autenticação do estado,
 * removendo os tokens de acesso e atualização, e marcando o usuário como deslogado.
 *
 * @example
 * // Disparo da ação logout
 * this.store.dispatch(logout());
 */
export const logout = createAction('[Auth] Logout');

/**
 * Ação para iniciar a renovação do token de autenticação.
 *
 * Esta ação é disparada quando o processo de renovação do token começa.
 * Geralmente, inclui o refresh token como propriedade para ser enviado à API.
 *
 * @param refreshToken O token de renovação utilizado para obter um novo token de autenticação.
 */
export const refreshToken = createAction('[Auth] Refresh Token', props<{ refreshToken: string }>());

/**
 * Ação para indicar o sucesso na renovação do token de autenticação.
 *
 * Esta ação é disparada quando o processo de renovação é concluído com sucesso.
 * Inclui o novo token de autenticação retornado pela API.
 *
 * @param token O novo token de autenticação gerado.
 */
export const refreshTokenSuccess = createAction('[Auth] Refresh Token Success', props<{ token: string }>());

/**
 * Ação para indicar falha na renovação do token de autenticação.
 *
 * Esta ação é disparada quando o processo de renovação falha, seja por erro de comunicação com a API
 * ou por problemas no token de renovação.
 *
 * @param error Uma mensagem descritiva do erro ocorrido.
 */
export const refreshTokenFailure = createAction('[Auth] Refresh Token Failure', props<{ error: string }>());
