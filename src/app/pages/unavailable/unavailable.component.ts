import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unavailable',
  templateUrl: './unavailable.component.html',
  styleUrl: './unavailable.component.scss',
})
export class UnavailableComponent implements OnInit {
  constructor(private router: Router) {}

  /**
   * Método de ciclo de vida do Angular chamado ao inicializar o componente.
   *
   * Atualmente, lança um erro porque o método ainda não foi implementado.
   *
   * @throws Error - Método não implementado.
   */
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /**
   * Redireciona o usuário para a página inicial da aplicação.
   *
   * @returns void
   */
  goToHome(): void {
    this.router.navigate(['/']);
  }
}
