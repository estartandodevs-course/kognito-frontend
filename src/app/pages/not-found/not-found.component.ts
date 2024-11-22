import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent implements OnInit {
  errorTitle: string = 'Ocorreu um erro de sistema 404';
  errorMessage: string = 'Por favor, tente novamente mais tarde.';

  constructor(private route: ActivatedRoute) {}

  /**
   * Verifica os parâmetros da rota e ajusta as mensagens de erro, caso seja um link de convite inválido.
   */
  ngOnInit(): void {
    const linkType = this.route.snapshot.queryParams['type'];
    if (linkType === 'invite') {
      this.errorTitle = 'Link de convite indisponível';
      this.errorMessage = 'Por favor, tente novamente mais tarde, ou solicite um novo link ao professor.';
    }
  }

  /**
   * Redireciona o usuário para a página inicial da aplicação.
   */
  goToHome(): void {
    window.location.href = '/';
  }
}
