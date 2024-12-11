import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { KognitoRestService } from '@services/kognito-rest/kognito-rest.service';
import { LoginSuccessProps } from '@mapping/login.types';
import { authActions } from './auth.actions';
import { Router } from '@angular/router'; // Importando Router

@Injectable()
export class AuthEffects {
  constructor(
    private _actions$: Actions,
    private _rest: KognitoRestService,
    private router: Router, // Injetando Router
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
              console.log('Full response from API:', response);
              const { accessToken, usuarioToken } = response.data;
              console.log('Destructured response:', { accessToken, usuarioToken });

              if (accessToken && usuarioToken) {
                const authData = { user: usuarioToken, token: accessToken };
                localStorage.setItem('auth', JSON.stringify(authData));
                return authActions.loginSuccess({ user: usuarioToken, token: accessToken });
              } else {
                console.log('Login failed: user or token missing');
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

  loginSuccess$ = createEffect(
    () => {
      return this._actions$.pipe(
        ofType(authActions.loginSuccess),
        tap(({ user }) => {
          const role = user.role; // Supondo que o objeto 'user' tenha o campo 'role'
          const redirectUrl = role === 'teacher' ? '/home/teacher' : '/home/student'; // Caminhos de redirecionamento com base no papel
          this.router.navigate([redirectUrl]); // Redirecionando para a página correspondente
        }),
      );
    },
    { dispatch: false },
  );
}
