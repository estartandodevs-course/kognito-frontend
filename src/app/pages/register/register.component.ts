import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  constructor(private router: Router) {}

  /**
   * Redireciona o usuário para a página inicial.
   */
  goToHome(): void {
    this.router.navigate(['/']);
  }
}
