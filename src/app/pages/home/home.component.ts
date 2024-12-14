import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

import { authSelectors } from '@store/auth/auth.selectors';
import { UserProps } from '@store/auth/auth.types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  user$!: Observable<UserProps | null>;

  constructor(private store: Store) {
    this.user$ = this.store.select(authSelectors.selectUser);
  }
}
