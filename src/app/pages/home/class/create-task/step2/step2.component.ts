import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
})
export class Step2Component {
  // AQUI DEVEMOS AJUSTAR PARA QUE A ROTA SEJA REDIRECIONAR ENTRE OS STEPS, NÃO AS PAGES

  constructor(private router: Router) {}

  goBack() {
    this.router.navigate(['previous-page']);
  }

  goNext() {
    this.router.navigate(['next-page']);
  }
}
