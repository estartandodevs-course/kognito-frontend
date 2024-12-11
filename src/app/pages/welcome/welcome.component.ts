import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  constructor(private router: Router) {}

  /**
   * Redireciona o usuário para a página login do aluno.
   *
   * Este método utiliza o Angular Router para navegar até a rota '/login',
   * permitindo que o usuário seja redirecionado para a página de login.
   */
  goToLoginStudent(): void {
    this.router.navigate(['/login/student']);
  }

  /**
   * Redireciona o usuário para a página login do professor.
   *
   * Este método utiliza o Angular Router para navegar até a rota '/login',
   * permitindo que o usuário seja redirecionado para a página de login.
   */
  goToLoginTeacher(): void {
    this.router.navigate(['/login/teacher']);
  }
}
