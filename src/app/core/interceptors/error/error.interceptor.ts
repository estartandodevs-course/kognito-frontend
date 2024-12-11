import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

import { MessageModalComponent } from '@components/display/message-modal/message-modal.component';
import { ModalService } from '@services/modal/modal.service';
import { errorExtractor } from './error.utils';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private _modalService: ModalService) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(req).pipe(
      catchError((err: HttpErrorResponse) => {
        // Cria um modal para exibir o erro.
        this._modalService.addModal({
          id: 'error',
          component: MessageModalComponent,
          props: { title: 'Erro', message: errorExtractor(err) },
        });

        // Passa o erro para frente.
        return throwError(() => err);
      }),
    );
  }
}
