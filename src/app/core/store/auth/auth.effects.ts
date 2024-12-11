import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

import { KognitoRestService } from '@services/kognito-rest/kognito-rest.service';
import { LoginSuccessProps } from '@mapping/login.types';
import { authActions } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private _actions$: Actions,
    private _rest: KognitoRestService,
    private router: Router, // Injete o Router aqui
  ) {}

  login$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(authActions.login),
      mergeMap(({ email, password }) =>
        this._rest
          .request<LoginSuccessProps>({
            relativeURL: 'api/identidade/autenticar',
            method: 'POST',
            body: { email, password },
          })
          .pipe(
            map(({ user, token }) => {
              console.log('Response from API:', { user, token });
              if (user && token) {
                const authData = { user, token };
                localStorage.setItem('auth', JSON.stringify(authData));
                // Redirecionar de acordo com o papel do usuário
                if (user.role === 'teacher') {
                  this.router.navigate(['/home/teacher']);
                } else {
                  this.router.navigate(['/home/student']);
                }
                return authActions.loginSuccess({ user, token });
              } else {
                return authActions.loginFailure();
              }
            }),
            catchError(() => of(authActions.loginFailure())),
          ),
      ),
    );
  });

  logout$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(authActions.logout),
        mergeMap(() => this._rest.request<void>({ relativeURL: 'logout/', method: 'POST' })),
      );
    },
    { dispatch: false },
  );
}
