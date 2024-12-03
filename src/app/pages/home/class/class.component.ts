import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrl: './class.component.scss',
})
export class ClassComponent {
  constructor(private router: Router) {}

  // Método que redireciona para a página "home/create-class"
  goToCreatTask(): void {
    this.router.navigate(['/home/class/create_task']);
  }
}
