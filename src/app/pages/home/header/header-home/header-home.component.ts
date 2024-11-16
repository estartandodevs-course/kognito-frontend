import { Component, OnInit } from '@angular/core';
import { TimeCaptureService } from 'app/core/services/time-capture.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.scss',
})
export class HeaderHomeComponent implements OnInit {
  saudacao: string = '';
  nomeUsuario: string = ''; // Inicializa com um valor vazio

  constructor(private timeCaptureService: TimeCaptureService) {}

  ngOnInit(): void {
    this.setSaudacao();
    this.setNomeUsuario(); // Aqui você pode definir o nome do usuário
  }

  /**
   * Define a saudação com base na hora do dia.
   */
  setSaudacao(): void {
    const hour = this.timeCaptureService.getCurrentHour();
    if (hour < 12) {
      this.saudacao = 'Bom dia';
    } else if (hour < 18) {
      this.saudacao = 'Boa tarde';
    } else {
      this.saudacao = 'Boa noite';
    }
  }

  /**
   * Define o nome do usuário (simulando que ele escolheu)
   * Aqui, você pode usar qualquer lógica para capturar o nome do usuário.
   */
  setNomeUsuario(): void {
    // Exemplo estático: você pode substituir isso com dados reais do usuário
    this.nomeUsuario = 'Nome Usuário';
  }
}
