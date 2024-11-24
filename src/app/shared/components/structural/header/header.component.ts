import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { TimeCaptureService } from 'app/core/services/time-capture.service';
import { IconHeaderProps } from './header.types';

/**
 * Componente de Header da aplicação.
 * Exibe o título e ícones de navegação no topo da página, com a capacidade de alterar a saudação do usuário dependendo da hora do dia.
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  constructor(
    private _time: TimeCaptureService,
    private _location: Location,
  ) {}

  @Input() title: string | null = null;
  @Input() iconsLeft: IconHeaderProps[] = [{ code: 'majesticons:arrow-left', onClick: () => this._location.back() }];
  @Input() iconsRight?: IconHeaderProps[];

  nameUser = 'Victor Gabriel';
  saudation = this._time.getsaudation();

  /**
   * Método que define a saudação do usuário com base no horário atual.
   * Utiliza o serviço TimeCaptureService para gerar a saudação personalizada.
   *
   * @returns {string} Saudação personalizada, por exemplo, "Bom dia", "Boa tarde" ou "Boa noite".
   */
  getSaudation(): string {
    return this._time.getsaudation();
  }

  /**
   * Método que retorna a navegação de volta para a página anterior.
   *
   * @returns {void}
   */
  goBack(): void {
    this._location.back();
  }
}
