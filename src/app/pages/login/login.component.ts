import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private router: Router) {}

  /**
   * Redireciona o usuário para a página inicial.
   */
  goToHome(): void {
    this.router.navigate(['/']);
  }
}
