/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { AuthTokenService } from './auth-token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthRoleService {
  constructor(private tokenService: AuthTokenService) {}

  /**
   * Verifica se o usuário possui a função de administrador.
   *
   * @returns `true` se o token contiver a função `admin`, caso contrário, `false`.
   */
  isAdmin(): boolean {
    const token = this.tokenService.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      return decodedToken?.role === 'admin';
    }
    return false;
  }

  /**
   * Verifica se o usuário possui a função de usuário comum.
   *
   * @returns `true` se o token contiver a função `user`, caso contrário, `false`.
   */
  isUser(): boolean {
    const token = this.tokenService.getToken();
    if (token) {
      const decodedToken = this.decodeToken(token);
      return decodedToken?.role === 'user';
    }
    return false;
  }

  /**
   * Decodifica o token JWT e retorna seu payload.
   *
   * @param token O token JWT a ser decodificado.
   * @returns Um objeto contendo as informações do payload do token.
   * @throws Um erro se o token não for válido ou estiver mal formatado.
   */
  private decodeToken(token: string): any {
    const parts = token.split('.');
    if (parts.length !== 3) {
      throw new Error('Token JWT inválido');
    }
    const payload = parts[1];
    const decoded = atob(payload);
    return JSON.parse(decoded);
  }
}
