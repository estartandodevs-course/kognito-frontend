import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataProps } from '@components/app-forms/form/form.types';
import { authActions } from '@store/auth/auth.actions'; // Importação da ação de autenticação

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  currentRole: string;

  constructor(
    private router: Router,
    private store: Store,
  ) {
    this.currentRole = this.extractCurrentRoleFromUrl();
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
}
