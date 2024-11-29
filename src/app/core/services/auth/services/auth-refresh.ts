import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AuthTokenService } from './auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthRefreshService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: AuthTokenService,
  ) {}

  /**
   * Realiza a renovação do token de autenticação utilizando o refresh token.
   *
   * Esta função envia uma solicitação POST para a API de renovação de token, passando o refresh token.
   * Se a renovação for bem-sucedida, o novo token é armazenado pelo `AuthTokenService`.
   *
   * @returns Um observable com a resposta contendo o novo token de autenticação.
   *
   * @throws {Error} Se o refresh token não for encontrado, um erro será lançado.
   */
  refreshToken(): Observable<{ token: string }> {
    const refreshToken = this.tokenService.getRefreshToken();
    if (!refreshToken) {
      console.error('Tentativa de renovação sem refresh token.');
      throw new Error('Refresh token não encontrado');
    }

    return this.http.post<{ token: string }>(`${this.apiUrl}/refresh-token`, { refreshToken }).pipe(
      tap((response) => this.tokenService.storeToken(response.token)),
      catchError((error) => {
        console.error('Erro ao renovar token:', error);
        throw error;
      }),
    );
  }
}
