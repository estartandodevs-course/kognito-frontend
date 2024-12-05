import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss', '../sidebar.component.scss'],
})
export class StudentComponent {
  @Input()
  path = '';

  /**
   * Realiza o logout do usuário.
   *
   * Esta função limpa os dados do usuário armazenados na sessão ou local storage
   * e redireciona para a página de login, garantindo que o acesso ao sistema seja encerrado.
   */
  logout() {}
}
