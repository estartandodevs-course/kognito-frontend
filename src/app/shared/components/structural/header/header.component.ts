import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { TimeCaptureService } from '@services/time-capture.service';
import { UserProps } from '@store/auth/auth.types';
import { IconHeaderProps } from './header.types';
import { authSelectors } from '@store/auth/auth.selectors';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  @Input() title: string | null = null;
  @Input() iconsLeft: IconHeaderProps[] = [{ code: 'majesticons:arrow-left', onClick: () => this._location.back() }];
  @Input() iconsRight?: IconHeaderProps[];

  user$!: Observable<UserProps | null>;
  saudation = this._time.getSaudation();

  constructor(
    private _time: TimeCaptureService,
    private _location: Location,
    private store: Store,
  ) {
    this.user$ = this.store.select(authSelectors.selectUser);
  }
}
