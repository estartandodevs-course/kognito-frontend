import { Injectable } from '@angular/core';
import { AuthLoginService } from './authService/auth-login';
import { AuthTokenService } from './authService/auth-token';
import { AuthRefreshService } from './authService/auth-refresh';
import { AuthRoleService } from './authService/auth-role';

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
   * Realiza o login do usuário com o email e senha fornecidos.
   *
   * @param email O email do usuário.
   * @param password A senha do usuário.
   * @returns Um observable contendo os tokens de autenticação e atualização.
   */
  login(email: string, password: string) {
    return this.loginService.login(email, password);
  }

  /**
   * Realiza o logout do usuário, limpando os tokens armazenados.
   */
  logout(): void {
    this.loginService.logout();
  }

  /**
   * Verifica se o usuário está autenticado.
   *
   * @returns `true` se o usuário estiver autenticado, `false` caso contrário.
   */
  isAuthenticated(): boolean {
    return !!this.tokenService.getToken();
  }

  /**
   * Renova o token de autenticação usando o token de atualização armazenado.
   *
   * @returns Um observable contendo o novo token de autenticação.
   */
  refreshToken() {
    return this.refreshService.refreshToken();
  }

  /**
   * Verifica se o usuário possui o papel de administrador.
   *
   * @returns `true` se o usuário for administrador, `false` caso contrário.
   */
  isAdmin(): boolean {
    return this.roleService.isAdmin();
  }

  /**
   * Verifica se o usuário possui o papel de usuário comum.
   *
   * @returns `true` se o usuário for um usuário comum, `false` caso contrário.
   */
  isUser(): boolean {
    return this.roleService.isUser();
  }

  /**
   * Obtém o token armazenado.
   *
   * @returns O token ou `null` se não existir.
   */
  getToken(): string | null {
    return this.tokenService.getToken();
  }
}
