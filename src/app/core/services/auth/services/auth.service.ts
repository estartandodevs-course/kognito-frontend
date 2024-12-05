import { Injectable } from '@angular/core';
import { AuthLoginService } from './auth-login';
import { AuthTokenService } from './auth-token';
import { AuthRefreshService } from './auth-refresh';
import { AuthRoleService } from './auth-role';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private loginService: AuthLoginService,
    private tokenService: AuthTokenService,
    private refreshService: AuthRefreshService,
    private roleService: AuthRoleService,
  ) {}

  /**
   * Recupera o token JWT armazenado.
   *
   * @returns O token JWT armazenado, ou `null` se não houver token.
   */
  getToken(): string | null {
    return this.tokenService.getToken();
  }

  /**
   * Realiza o login do usuário utilizando as credenciais fornecidas.
   *
   * @param email O email do usuário.
   * @param password A senha do usuário.
   * @returns Um observable que emite o resultado do login.
   */
  login(email: string, password: string) {
    return this.loginService.login(email, password);
  }

  /**
   * Realiza o logout do usuário e limpa os tokens armazenados.
   */
  logout(): void {
    this.loginService.logout();
  }

  /**
   * Verifica se o usuário está autenticado, ou seja, se há um token válido armazenado.
   *
   * @returns `true` se o usuário estiver autenticado, caso contrário `false`.
   */
  isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }

  /**
   * Renova o token JWT utilizando o refresh token.
   *
   * @returns Um observable que emite o novo token JWT.
   */
  refreshToken() {
    return this.refreshService.refreshToken();
  }

  /**
   * Verifica se o usuário possui o papel de administrador.
   *
   * @returns `true` se o usuário for um administrador, caso contrário `false`.
   */
  isAdmin(): boolean {
    return this.roleService.isAdmin();
  }

  /**
   * Verifica se o usuário possui o papel de usuário comum.
   *
   * @returns `true` se o usuário for um usuário comum, caso contrário `false`.
   */
  isUser(): boolean {
    return this.roleService.isUser();
  }
}
