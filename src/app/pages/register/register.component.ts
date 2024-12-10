import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { authSelectors } from '@store/auth/auth.selectors';
import { UserProps } from '@store/auth/auth.types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  user$!: Observable<UserProps | null>;

  constructor(private store: Store) {
    this.user$ = this.store.select(authSelectors.selectUser);
  }
}
