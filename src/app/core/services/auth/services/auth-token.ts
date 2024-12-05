import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthTokenService {
  private readonly tokenKey = 'authToken';
  private readonly refreshTokenKey = 'refreshToken';

  /**
   * Armazena o token JWT no armazenamento local.
   *
   * Verifica se o token fornecido é válido antes de armazená-lo no `localStorage`.
   *
   * @param token O token JWT a ser armazenado.
   */
  storeToken(token: string): void {
    if (!token) {
      console.warn('Tentativa de armazenar token inválido.');
      return;
    }
    localStorage.setItem(this.tokenKey, token);
  }

  /**
   * Armazena o refresh token no armazenamento local.
   *
   * Verifica se o refresh token fornecido é válido antes de armazená-lo no `localStorage`.
   *
   * @param refreshToken O refresh token a ser armazenado.
   */
  storeRefreshToken(refreshToken: string): void {
    if (!refreshToken) {
      console.warn('Tentativa de armazenar refresh token inválido.');
      return;
    }
    localStorage.setItem(this.refreshTokenKey, refreshToken);
  }

  /**
   * Recupera o token JWT armazenado no `localStorage`.
   *
   * @returns O token JWT armazenado, ou `null` se não houver token.
   */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /**
   * Recupera o refresh token armazenado no `localStorage`.
   *
   * @returns O refresh token armazenado, ou `null` se não houver refresh token.
   */
  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  /**
   * Limpa os tokens armazenados no `localStorage`.
   *
   * Remove o token JWT e o refresh token do `localStorage`.
   */
  clearTokens(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.refreshTokenKey);
  }
}
