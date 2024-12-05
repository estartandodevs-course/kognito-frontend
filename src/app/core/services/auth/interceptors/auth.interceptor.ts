import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { RequestBody, ResponseBody } from './http-interfaces';

/**
 * Intercepta requisições HTTP para adicionar cabeçalhos de autenticação, se necessário.
 *
 * Este interceptor insere automaticamente um token de autenticação no cabeçalho da requisição, caso ele exista.
 * Ele utiliza o serviço de autenticação para recuperar o token, garantindo que todas as requisições protegidas
 * sejam enviadas com credenciais válidas.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  /**
   * Construtor da classe que inicializa o serviço de autenticação.
   *
   * @param authService Serviço responsável por gerenciar a autenticação do usuário.
   */
  constructor(private authService: AuthService) {}

  /**
   * Intercepta as requisições HTTP e adiciona o token de autenticação no cabeçalho, se presente.
   *
   * Este método verifica se o token de autenticação está disponível. Caso o token exista, ele é
   * adicionado ao cabeçalho da requisição como um Bearer Token. Se o token não estiver presente, a requisição
   * é feita normalmente sem cabeçalho de autorização.
   *
   * @param req A requisição HTTP que está sendo interceptada.
   * @param next O manipulador da requisição, usado para continuar o fluxo da requisição.
   *
   * @returns Um observable com o evento da requisição, que pode incluir o corpo da resposta.
   */
  intercept(req: HttpRequest<RequestBody>, next: HttpHandler): Observable<HttpEvent<ResponseBody>> {
    const token = this.authService.getToken();

    if (token) {
      const clonedRequest = req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
      return next.handle(clonedRequest);
    }

    console.warn('Requisição sem autenticação.');
    return next.handle(req);
  }
}
