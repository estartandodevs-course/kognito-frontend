import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { RequestProps } from './kognito-rest.types';
import { AuthStateProps } from '@store/auth/auth.types';

@Injectable({
  providedIn: 'root',
})
export class KognitoRestService {
  private readonly _baseURL = ''; // Definir url base da API do Kognito.

  constructor(private _http: HttpClient) {}

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

    switch (method) {
      case 'GET':
        return this._http.get<T>(url, options);
      case 'POST':
        return this._http.post<T>(url, body, options);
      case 'PUT':
        return this._http.put<T>(url, body, options);
      case 'PATCH':
        return this._http.patch<T>(url, body, options);
      case 'DELETE':
        return this._http.delete<T>(url, options);
    }
  }
}
