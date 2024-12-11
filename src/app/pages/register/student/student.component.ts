import { Component, OnDestroy } from '@angular/core';
import { finalize, Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { DataProps } from '@components/app-forms/form/form.types';
import { KognitoRestService } from '@services/kognito-rest/kognito-rest.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent implements OnDestroy {
  private _subscription!: Subscription;
  isLoading = false;

  constructor(
    private _router: Router,
    private _rest: KognitoRestService,
  ) {}

  /**
   * Adiciona um novo estudante.
   *
   * Envia uma requisição HTTP POST para criar um novo estudante com os dados fornecidos.
   * Após o sucesso da requisição, o usuário é redirecionado para a página de login.
   *
   * @param {DataProps} data - Os dados do estudante a serem enviados na requisição.
   */
  addStudent(data: DataProps) {
    this.isLoading = true;
    this._subscription = this._rest
      .request({ relativeURL: 'api/usuarios/alunos', method: 'POST', body: data })
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe({ next: () => this._router.navigate(['/login/student']) });
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
