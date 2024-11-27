import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AuthTokenService } from './auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthRefreshService {
  private readonly apiUrl = 'https://meu-servidor.com/api/auth'; // Atualize com a URL real da API

  constructor(
    private http: HttpClient,
    private tokenService: AuthTokenService,
  ) {}

  /**
   * Solicita a renovação do token de acesso usando o refresh token armazenado.
   *
   * @returns Um `Observable` contendo o novo token de acesso.
   * @throws Um erro caso o refresh token não esteja disponível ou a solicitação falhe.
   */
  refreshToken(): Observable<{ token: string }> {
    const refreshToken = this.tokenService.getRefreshToken();
    if (!refreshToken) {
      throw new Error('Refresh token não encontrado');
    }

    return this.http.post<{ token: string }>(`${this.apiUrl}/refresh-token`, { refreshToken }).pipe(
      tap((response) => {
        if (response?.token) {
          this.tokenService.storeToken(response.token); // Armazena o novo token
        }
      }),
      catchError((error) => {
        console.error('Erro ao renovar o token', error);
        throw error; // Propaga o erro para ser tratado externamente
      }),
    );
  }
}
