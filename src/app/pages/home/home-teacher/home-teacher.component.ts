import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-teacher',
  templateUrl: './home-teacher.component.html',
  styleUrl: './home-teacher.component.scss',
})
export class HomeTeacherComponent {
  constructor(private router: Router) {}

  // Método que redireciona para a página "home/create-class"
  redirectToCreateClass(): void {
    this.router.navigate(['/home/create-class']);
  }
}
