import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { tap, catchError } from 'rxjs/operators';
import { AuthTokenService } from './auth-token';
import {
  login,
  loginSuccess,
  loginFailure,
  logout,
  refreshToken,
  refreshTokenSuccess,
  refreshTokenFailure,
} from '../../../store/auth/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthLoginService {
  // @ts-ignore
  private readonly apiUrl = `${environment.apiUrl}/auth`;

  constructor(
    private http: HttpClient,
    private tokenService: AuthTokenService,
    private store: Store,
  ) {}

  /**
   * Realiza o login do usuário despachando a ação correspondente.
   *
   * @param email Email do usuário.
   * @param password Senha do usuário.
   */
  login(email: string, password: string) {
    this.store.dispatch(login({ email, password }));

    return this.http
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

          this.store.dispatch(loginFailure({ error: error.message }));
          throw error;
        }),
      )
      .subscribe();
  }

  /**
   * Realiza o logout do usuário despachando a ação correspondente.
   */
  logout(): void {
    this.tokenService.clearTokens(); // Limpa os tokens locais
    this.store.dispatch(logout()); // Despacha a ação de logout
  }

  /**
   * Renova o token de autenticação despachando a ação correspondente.
   */
  refreshAuthToken(): void {
    const refreshTokenValue = this.tokenService.getRefreshToken();

    if (!refreshTokenValue) {
      console.error('Attempt to refresh without a refresh token.');
      this.store.dispatch(refreshTokenFailure({ error: 'Refresh token not found' }));
      return;
    }

    this.store.dispatch(refreshToken({ refreshToken: refreshTokenValue })); // Despacha a ação de renovação

    this.http
      .post<{ token: string }>(`${this.apiUrl}/refresh-token`, { refreshToken: refreshTokenValue })
      .pipe(
        tap((response) => {
          this.tokenService.storeToken(response.token);

          this.store.dispatch(refreshTokenSuccess({ token: response.token }));
        }),
        catchError((error) => {
          console.error('Token refresh error:', error);

          this.store.dispatch(refreshTokenFailure({ error: error.message }));
          throw error;
        }),
      )
      .subscribe();
  }
}
