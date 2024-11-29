import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { AuthTokenService } from './auth-token';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: AuthTokenService,
  ) {}

  /**
   * Realiza o login do usuário utilizando email e senha, e armazena os tokens retornados.
   *
   * Esta função envia uma solicitação POST para a API de autenticação, passando o email e a senha do usuário.
   * Se a autenticação for bem-sucedida, os tokens `token` e `refreshToken` são armazenados pelo `AuthTokenService`.
   *
   * @param email O email do usuário.
   * @param password A senha do usuário.
   *
   * @returns Um observable com a resposta contendo os tokens `token` e `refreshToken`.
   */
  login(email: string, password: string): Observable<{ token: string; refreshToken: string }> {
    return this.http.post<{ token: string; refreshToken: string }>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap((response) => {
        this.tokenService.storeToken(response.token);
        this.tokenService.storeRefreshToken(response.refreshToken);
      }),
      catchError((error) => {
        console.error('Erro ao realizar login:', error);
        throw error;
      }),
    );
  }

  /**
   * Realiza o logout do usuário, removendo os tokens armazenados.
   *
   * Esta função limpa os tokens de autenticação armazenados pelo `AuthTokenService`.
   */
  logout(): void {
    this.tokenService.clearTokens();
  }
}
