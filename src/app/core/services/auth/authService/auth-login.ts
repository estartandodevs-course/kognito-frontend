import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthTokenService } from './auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  private readonly apiUrl = 'https://meu-servidor.com/api/auth'; // Atualize com a URL real da API

  constructor(
    private http: HttpClient,
    private tokenService: AuthTokenService,
  ) {}

  /**
   * Realiza o login do usuário e armazena os tokens (de acesso e refresh) no localStorage.
   *
   * @param email - O endereço de email do usuário.
   * @param password - A senha do usuário.
   * @returns Um `Observable` contendo o token de acesso e o refresh token.
   */
  login(email: string, password: string): Observable<{ token: string; refreshToken: string }> {
    return this.http.post<{ token: string; refreshToken: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        if (response?.token && response?.refreshToken) {
          this.tokenService.storeToken(response.token);
          this.tokenService.storeRefreshToken(response.refreshToken);
        }
      }),
    );
  }

  /**
   * Realiza o logout do usuário removendo os tokens do localStorage.
   */
  logout(): void {
    this.tokenService.clearTokens();
  }
}
