import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';

import { authSelectors } from '@store/auth/auth.selectors';
import { AuthStateProps } from '@store/auth/auth.types';

export const authGuard: CanActivateFn = () => {
  const store = inject(Store<AuthStateProps>);
  const router = inject(Router);

  return store.select(authSelectors.selectUser).pipe(
    map((user) => {
      if (user) return true;
      router.navigate(['/welcome']);
      return false;
    }),
  );
};
