import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

import { KognitoRestService } from '@services/kognito-rest/kognito-rest.service';
import { LoginSuccessProps } from '@mapping/login.types';
import { authActions } from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  constructor(
    private _actions$: Actions,
    private _rest: KognitoRestService,
    private router: Router,
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
            map((response) => {
              const data = response.data;
              const nameUser = data.usuarioToken.claims.filter((claim) => claim.type === 'name')[0];
              const roleUser = data.usuarioToken.claims.filter((claim) => claim.type === 'role')[0];

              const success = authActions.loginSuccess({
                user: { name: nameUser.value, role: roleUser.value.toLowerCase() as 'teacher' | 'student' },
                token: data.accessToken,
              });

              // Redireciona o usuário para a home.
              this.router.navigate(['/home']);

              return success;
            }),
            catchError(() => of(authActions.loginFailure())),
          ),
      ),
    );
  });
}
