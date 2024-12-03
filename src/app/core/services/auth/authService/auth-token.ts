import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  private readonly tokenKey = 'authToken';
  private readonly refreshTokenKey = 'refreshToken';

  /**
   * Armazena o token de autenticação no `localStorage`.
   *
   * @param token O token de autenticação a ser armazenado.
   */
  storeToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Armazena o token de atualização no `localStorage`.
   *
   * @param refreshToken O token de atualização a ser armazenado.
   */
  storeRefreshToken(refreshToken: string): void {
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  /**
   * Obtém o token de autenticação armazenado no `localStorage`.
   *
   * @returns O token de autenticação ou `null` se não estiver presente.
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Obtém o token de atualização armazenado no `localStorage`.
   *
   * @returns O token de atualização ou `null` se não estiver presente.
   */
  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  /**
   * Remove os tokens de autenticação e de atualização do `localStorage`.
   */
  clearTokens(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }
}
