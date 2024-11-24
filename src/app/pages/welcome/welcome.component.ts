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
   * Redireciona o usuário para a página login.
   *
   * Este método utiliza o Angular Router para navegar até a rota '/login',
   * permitindo que o usuário seja redirecionado para a página de login.
   */
  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
