import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

/**
 * Componente responsável por exibir a página de "Não Encontrado" (404)
 * e redirecionar o usuário para a página inicial, se necessário.
 */
@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
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
