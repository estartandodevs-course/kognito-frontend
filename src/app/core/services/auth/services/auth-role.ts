import { Injectable } from '@angular/core';
import { AuthTokenService } from './auth-token';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  role: string;
  exp?: number;
  [key: string]: unknown;
}

@Injectable({
  providedIn: 'root',
})
export class AuthRoleService {
  constructor(private tokenService: AuthTokenService) {}

  /**
   * Decodifica um token JWT em um objeto do tipo `T`.
   *
   * Esta função tenta decodificar o token JWT fornecido e retorna o payload decodificado. Se houver algum erro
   * durante a decodificação, o erro será capturado e `null` será retornado.
   *
   * @param token O token JWT a ser decodificado.
   * @returns O payload decodificado do tipo `T`, ou `null` se ocorrer um erro.
   */
  private decodeToken<T extends object>(token: string): T | null {
    try {
      return jwtDecode<T>(token);
    } catch (error) {
      console.error('Erro ao decodificar token JWT:', error);
      return null;
    }
  }

  /**
   * Verifica se o usuário tem a função de administrador.
   *
   * Esta função decodifica o token JWT do usuário e verifica se o papel (`role`) é igual a `'admin'`.
   *
   * @returns `true` se o usuário for administrador, caso contrário, `false`.
   */
  isAdmin(): boolean {
    const decoded = this.decodeToken<JwtPayload>(this.tokenService.getToken() || '');
    return decoded?.role === 'admin';
  }

  /**
   * Verifica se o usuário tem a função de usuário comum.
   *
   * Esta função decodifica o token JWT do usuário e verifica se o papel (`role`) é igual a `'user'`.
   *
   * @returns `true` se o usuário for comum, caso contrário, `false`.
   */
  isUser(): boolean {
    const decoded = this.decodeToken<JwtPayload>(this.tokenService.getToken() || '');
    return decoded?.role === 'user';
  }
}
