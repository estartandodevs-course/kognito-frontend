import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { finalize } from 'rxjs';
import { DataProps } from '@components/app-forms/form/form.types';
import { KognitoRestService } from '@services/kognito-rest/kognito-rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  currentRole: string;
  isLoading = false;

  constructor(
    private router: Router,
    private _rest: KognitoRestService,
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
   * Realiza o login do usuário.
   *
   * @param {DataProps} data - Os dados de login (e-mail e senha).
   */
  loginUser(data: DataProps): void {
    this.isLoading = true;

    this._rest
      .request({
        relativeURL: 'api/identidade/autenticar',
        method: 'POST',
        body: data,
      })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({
        next: (response) => {
          console.log('Login bem-sucedido:', response);
          this.redirectToHome();
        },
        error: (error) => {
          console.error('Erro ao autenticar:', error);
        },
      });
  }

  /**
   * Redireciona o usuário para a página inicial.
   */
  private redirectToHome(): void {
    const redirectTo = `/home/${this.currentRole}`;
    this.router.navigate([redirectTo]);
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
