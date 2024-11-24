import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss',
})
export class TeacherComponent {
  constructor(private router: Router) {}

  /**
   * Redireciona o usuário para a página de criação de turma.
   *
   * Esta função utiliza o Angular Router para navegar até a rota '/home/create-class',
   * permitindo que o usuário seja redirecionado para a página de criação de turma.
   */
  redirectToCreateClass(): void {
    this.router.navigate(['/home/create_class']);
  }
}
