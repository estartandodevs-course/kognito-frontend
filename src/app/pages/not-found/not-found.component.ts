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

  ngOnInit(): void {
    // Verifica se a URL contém o "convite" na rota
    const linkType = this.route.snapshot.queryParams['type'];
    if (linkType === 'invite') {
      this.errorTitle = 'Link de convite indisponível';
      this.errorMessage = 'Por favor, tente novamente mais tarde, ou solicite um novo link ao professor.';
    }
  }

  goToHome(): void {
    window.location.href = '/'; // Redireciona para a página inicial
  }
}
