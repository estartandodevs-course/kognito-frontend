import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { RequestProps } from './kognito-rest.types';
import { AuthStateProps } from '@store/auth/auth.types';
import { authActions } from '@store/auth/auth.actions';

@Injectable({
  providedIn: 'root',
})
export class KognitoRestService {
  private readonly _baseURL = ''; // Definir url base da API do Kognito.

  constructor(
    private _http: HttpClient,
    private _router: Router,
    private store: Store,
  ) {}

  request<T>({ method, relativeURL, body, params }: RequestProps): Observable<T> {
    const stateAuthLS = localStorage.getItem('auth');
    const url = this._baseURL + relativeURL;

    let headers = new HttpHeaders();
    if (stateAuthLS) {
      const auth: AuthStateProps = JSON.parse(stateAuthLS);
      if (auth.token) {
        headers = headers.set('Authorization', `Bearer ${auth.token}`);
      }
    }

    const options = {
      headers,
      params,
    };

    let request$: Observable<T>;
    switch (method) {
      case 'GET':
        request$ = this._http.get<T>(url, options);
        break;
      case 'POST':
        request$ = this._http.post<T>(url, body, options);
        break;
      case 'PUT':
        request$ = this._http.put<T>(url, body, options);
        break;
      case 'PATCH':
        request$ = this._http.patch<T>(url, body, options);
        break;
      case 'DELETE':
        request$ = this._http.delete<T>(url, options);
    }

    return request$.pipe(
      catchError((err) => {
        if (err.status === 401) {
          this.store.dispatch(authActions.resetState());
          this._router.navigate(['/welcome']);
        }
        return throwError(() => err);
      }),
    );
  }
}
