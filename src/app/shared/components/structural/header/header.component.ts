import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

import { TimeCaptureService } from 'app/core/services/time-capture.service';
import { IconHeaderProps } from './header.types';

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

  // Icone com seta é o padrão.
  @Input() iconsLeft: IconHeaderProps[] = [{ code: 'majesticons:arrow-left', onClick: () => this._location.back() }];
  @Input() iconsRight?: IconHeaderProps[];

  nameUser = 'Victor Gabriel'; // Obter valor pelo serviço de autenticação.
  saudation = this._time.getSaudation();
}
