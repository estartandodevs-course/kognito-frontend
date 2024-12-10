import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss',
})
export class StudentComponent {
  constructor(private router: Router) {}

  /**
   * Redireciona o usuário para a página inicial.
   */
  goToHome(): void {
    this.router.navigate(['/']);
  }
}
