import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { TimeCaptureService } from '@services/time-capture.service';
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

  nameUser = 'Victor Gabriel'; // Obter valor pelo serviço de autenticação.
  saudation = this._time.getSaudation();
}
