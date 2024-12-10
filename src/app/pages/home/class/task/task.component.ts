import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrl: './task.component.scss',
})
export class TaskComponent {
  constructor(private router: Router) {}

  /**
   * Lida com o evento de clique no ícone.
   * Redireciona o usuário para a página desejada.
   */
  onIconClick(): void {
    this.router.navigate(['/home/class/create_task']);
  }
}
