import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginFailure } from '../actions/auth.actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthLoginService } from '@services/auth/services';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authLoginService: AuthLoginService,
  ) {}

  /**
   * Efeito para o login do usuário.
   *
   * Este efeito é ativado quando a ação `login` é disparada. Ele faz uma requisição ao serviço de login,
   * passando as credenciais do usuário (e-mail e senha). Com base na resposta da requisição, ele dispara a ação
   * `loginSuccess` com o token e o refreshToken em caso de sucesso, ou a ação `loginFailure` com a mensagem de erro em caso de falha.
   *
   * @returns {Observable<Action>} Observable que emite a ação de sucesso ou falha do login.
   *
   * @example
   * this.store.dispatch(login({ email: 'user@example.com', password: 'password' }));
   */
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(login),
      switchMap((action) =>
        // @ts-ignore
        this.authLoginService.login(action.email, action.password).pipe(
          // @ts-ignore
          map((response) => loginSuccess({ token: response.token, refreshToken: response.refreshToken })),
          catchError((error) => of(loginFailure({ error: error.message }))),
        ),
      ),
    );
  });
}
