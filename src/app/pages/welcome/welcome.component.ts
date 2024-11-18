import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent {
  constructor(private router: Router) {} // Injeta o Router no construtor

  // Método para redirecionar para a página do aluno
  goToHome() {
    this.router.navigate(['/home']);
  }
}
