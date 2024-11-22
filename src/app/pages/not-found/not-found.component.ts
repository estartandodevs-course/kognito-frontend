import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  isTeacherRoute: boolean = false; // Flag para verificar o contexto

  constructor(private activatedRoute: ActivatedRoute) {}

  /**
   * Método do ciclo de vida do Angular chamado após a criação do componente.
   * Verifica se a rota contém "teacher" para ajustar o contexto.
   */
  ngOnInit(): void {
    this.isTeacherRoute = this.activatedRoute.snapshot.url.some((segment) => segment.path.includes('teacher'));
  }

  /**
   * Redireciona o usuário para a página inicial (rota "/").
   */
  goToHome(): void {
    window.location.href = '/';
  }
}
