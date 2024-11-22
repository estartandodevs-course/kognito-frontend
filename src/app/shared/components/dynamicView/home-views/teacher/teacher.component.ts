import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.scss',
})
export class TeacherComponent {
  constructor(private router: Router) {}

  // Método que redireciona para a página "home/create-class"
  redirectToCreateClass(): void {
    this.router.navigate(['/home/create-class']);
  }
}
