import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-class',
  templateUrl: './create-class.component.html',
  styleUrl: './create-class.component.scss',
})
export class CreateClassComponent {
  constructor(private router: Router) {}

  // Método que redireciona para a página "home/create-class"
  goToClass(): void {
    this.router.navigate(['/home/class']);
  }
}
