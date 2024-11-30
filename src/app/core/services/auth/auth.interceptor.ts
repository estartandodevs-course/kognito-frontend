/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  /**
   * Intercepta requisições HTTP e adiciona o cabeçalho de autorização com o token, se disponível.
   *
   * @param req - A requisição HTTP a ser interceptada.
   * @param next - O próximo manipulador da cadeia de interceptores.
   * @returns Um Observable que continua o fluxo da requisição.
   */
  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const token = this.authService.getToken();
    if (token) {
      const clonedRequest = req.clone({
        setHeaders: { Authorization: `Bearer ${token}` },
      });
      return next.handle(clonedRequest);
    }
    return next.handle(req);
  }
}
