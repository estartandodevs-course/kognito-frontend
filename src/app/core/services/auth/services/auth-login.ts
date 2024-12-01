import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { tap, catchError } from 'rxjs/operators';
import { AuthTokenService } from './auth-token';
import { login, loginSuccess, loginFailure, logout } from '../../../store/auth/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: AuthTokenService,
    private store: Store, // Injeta o Store para despachar ações
  ) {}

  /**
   * Realiza o login do usuário despachando a ação correspondente.
   *
   * Essa função dispara a ação de login (`[Auth] Login`) e realiza a requisição HTTP ao backend.
   * Em caso de sucesso, despacha a ação `[Auth] Login Success` com os tokens retornados pela API.
   * Em caso de erro, despacha a ação `[Auth] Login Failure` com a mensagem de erro.
   *
   * @param {string} email Email do usuário.
   * @param {string} password Senha do usuário.
   *
   * @example
   * // Uso do método de login
   * authLoginService.login('usuario@example.com', 'senha123');
   */
  login(email: string, password: string): void {
    this.store.dispatch(login({ email, password })); // Despacha a ação de login

    this.http
      .post<{ token: string; refreshToken: string }>(`${this.apiUrl}/login`, { email, password })
      .pipe(
        tap((response) => {
          this.tokenService.storeToken(response.token);
          this.tokenService.storeRefreshToken(response.refreshToken);

          // Despacha a ação de sucesso
          this.store.dispatch(loginSuccess({ token: response.token, refreshToken: response.refreshToken }));
        }),
        catchError((error) => {
          console.error('Login error:', error);

          // Despacha a ação de falha
          this.store.dispatch(loginFailure({ error: error.message }));
          throw error;
        }),
      )
      .subscribe();
  }

  /**
   * Realiza o logout do usuário, limpando os tokens e despachando a ação correspondente.
   *
   * Essa função chama o método `clearTokens` do `AuthTokenService` para remover os tokens
   * armazenados localmente e despacha a ação `[Auth] Logout` para atualizar o estado global.
   *
   * @example
   * // Uso do método de logout
   * authLoginService.logout();
   */
  logout(): void {
    this.tokenService.clearTokens(); // Limpa os tokens locais
    this.store.dispatch(logout()); // Despacha a ação de logout
  }
}
