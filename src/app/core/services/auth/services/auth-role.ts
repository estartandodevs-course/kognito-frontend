import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthTokenService } from './auth-token';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';
import { loadUserRoleSuccess, loadUserRoleFailure } from '../../../store/auth/actions/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class AuthRoleService {
  private readonly apiUrl = `${environment.apiUrl}/auth`; // URL da API para obter dados de usuário

  constructor(
    private http: HttpClient,
    private tokenService: AuthTokenService,
    private store: Store,
  ) {}

  /**
   * Obtém as informações de papel (role) do usuário na API.
   *
   * Esta função faz uma requisição à API para obter os dados do usuário com base no token armazenado.
   * O token é enviado no cabeçalho de autorização, e a resposta contém a role do usuário.
   *
   * @returns Um Observable com a resposta que inclui a role do usuário.
   */
  getUserRole(): Observable<string> {
    const token = this.tokenService.getToken();

    if (!token) {
      throw new Error('Token de autenticação não encontrado');
    }

    // Faz a requisição à API para obter os dados do usuário com base no token
    return this.http
      .get<{ role: string }>(`${this.apiUrl}/user-role`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        switchMap((response) => {
          // Aqui, despachamos a action para atualizar o estado da role
          this.store.dispatch(loadUserRoleSuccess({ role: response.role }));
          return [response.role];
        }),
        catchError((error) => {
          console.error('Erro ao carregar role do usuário:', error);
          this.store.dispatch(loadUserRoleFailure({ error: error.message }));
          throw error;
        }),
      );
  }
}
