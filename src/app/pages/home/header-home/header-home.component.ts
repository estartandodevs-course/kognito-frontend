import { Component, OnInit } from '@angular/core';
import { TimeCaptureService } from 'app/core/services/time-capture.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrl: './header-home.component.scss',
})
export class HeaderHomeComponent implements OnInit {
  saudation: string = '';
  userName: string = '';

  constructor(private timeCaptureService: TimeCaptureService) {}

  ngOnInit(): void {
    this.setsaudation();
    this.setuserName(); // Aqui você pode definir o nome do usuário
  }

  /**
   * Define a saudação com base na hora do dia.
   */
  setsaudation(): void {
    const hour = this.timeCaptureService.getCurrentHour();
    if (hour < 12) {
      this.saudation = 'Bom dia';
    } else if (hour < 18) {
      this.saudation = 'Boa tarde';
    } else {
      this.saudation = 'Boa noite';
    }
  }

  /**
   * Define o nome do usuário (simulando que ele escolheu)
   * Aqui, você pode usar qualquer lógica para capturar o nome do usuário.
   */
  setuserName(): void {
    // Exemplo estático: você pode substituir isso com dados reais do usuário
    this.userName = 'Nome Usuário';
  }
}
