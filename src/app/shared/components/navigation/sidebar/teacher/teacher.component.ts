import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss', '../sidebar.component.scss'],
})
export class TeacherComponent {
  @Input()
  path: string = '';

  /**
   * Realiza o logout do usuário.
   *
   * Esta função limpa os dados do usuário armazenados na sessão ou local storage
   * e redireciona para a página de login, garantindo que o acesso ao sistema seja encerrado.
   */

  logout() {
    //Incluir o serviço <3
  }
}
