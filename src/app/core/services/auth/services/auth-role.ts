import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthTokenService } from './auth-token';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { loadUserRoleSuccess, loadUserRoleFailure } from '../../../store/auth/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthRoleService {
  // @ts-ignore
  private readonly apiUrl = `${environment.apiUrl}/auth`; // URL da API para obter dados de usuário

  private role: string | null = null; // Armazena a role localmente para evitar múltiplas chamadas à API

  constructor(
    private http: HttpClient,
    private tokenService: AuthTokenService,
    private store: Store,
  ) {}

  /**
   * Obtém as informações de papel (role) do usuário na API.
   *
   * @returns Um Observable com a resposta que inclui a role do usuário.
   */
  getUserRole(): Observable<string> {
    if (this.role) {
      return of(this.role); // Retorna a role armazenada, se disponível
    }

    const token = this.tokenService.getToken();

    if (!token) {
      throw new Error('Token de autenticação não encontrado');
    }

    return this.http
      .get<{ role: string }>(`${this.apiUrl}/user-role`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        switchMap((response) => {
          this.role = response.role; // Armazena a role localmente
          this.store.dispatch(loadUserRoleSuccess({ role: response.role }));
          return of(response.role);
        }),
        catchError((error) => {
          console.error('Erro ao carregar role do usuário:', error);
          this.store.dispatch(loadUserRoleFailure({ error: error.message }));
          throw error;
        }),
      );
  }

  /**
   * Verifica se o usuário é administrador.
   *
   * @returns `true` se o usuário for administrador, caso contrário, `false`.
   */
  isAdmin(): boolean {
    return this.role === 'admin';
  }

  /**
   * Verifica se o usuário é um usuário comum.
   *
   * @returns `true` se o usuário for um usuário comum, caso contrário, `false`.
   */
  isUser(): boolean {
    return this.role === 'user';
  }
}
