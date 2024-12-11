import { authSelectors } from '@store/auth/auth.selectors';
import { AuthStateProps } from '@store/auth/auth.types'; // Usando o tipo correto

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataProps } from '@components/app-forms/form/form.types';
import { authActions } from '@store/auth/auth.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  currentRole: string;
  authState$: Observable<AuthStateProps>;

  constructor(
    private router: Router,
    private store: Store,
  ) {
    this.currentRole = this.extractCurrentRoleFromUrl();
    this.authState$ = this.store.select(authSelectors.selectAuthState);
  }

  /**
   * Extrai o papel atual do usuário a partir da URL.
   *
   * @returns {string} O papel atual.
   */
  private extractCurrentRoleFromUrl(): string {
    const urlSegments = this.router.url.split('/');
    return urlSegments[urlSegments.length - 1];
  }

  /**
   * Realiza o login do usuário, disparando uma ação para o store.
   *
   * @param {DataProps} data - Os dados de login (e-mail e senha).
   */
  loginUser(data: DataProps): void {
    const { email, password } = data;

    if (typeof email === 'string' && typeof password === 'string') {
      this.store.dispatch(authActions.login({ email, password }));
    }
  }

  /**
   * Retorna o papel do usuário em português.
   *
   * @returns {string} Papel do usuário em português.
   */
  get rolePTBR(): string {
    return this.currentRole === 'teacher' ? 'professor' : 'aluno';
  }

  /**
   * Realiza o redirecionamento após o login com base no papel do usuário.
   */
  private redirectBasedOnRole(userRole: string): void {
    if (userRole === 'teacher') {
      this.router.navigate(['/home/teacher']);
    } else {
      this.router.navigate(['/home/student']);
    }
  }

  /**
   * Monitorando mudanças no estado de autenticação para redirecionar após login.
   */
  ngOnInit(): void {
    this.authState$.subscribe((authState: AuthStateProps) => {
      if (authState.user && authState.token) {
        this.redirectBasedOnRole(authState.user.role);
      }
    });
  }
}
