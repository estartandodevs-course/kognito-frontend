import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { openModal, closeModal } from './core/store/modal/modal.actions';
import { selectIsVisible, selectModalData } from './core/store/modal/modal.selectors';
import { ModalData } from './core/store/modal/modal.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  template: `
    <div>
      <button (click)="showModal()">Abrir Modal</button>

      <app-modal
        *ngIf="isVisible$ | async"
        [title]="(modalData$ | async)?.title || 'Título Padrão'"
        [paragraph]="(modalData$ | async)?.paragraph || 'Texto padrão para o parágrafo.'"
        [buttonPrincipal]="(modalData$ | async)?.buttonPrincipal"
        [buttonSecondary]="(modalData$ | async)?.buttonSecondary"
        (principalButtonClicked)="onPrincipalAction()"
        (secondaryButtonClicked)="onSecondaryAction()">
      </app-modal>
    </div>
  `,
})
export class AppComponent {
  title = 'kognito';

  /** Observable que gerencia a visibilidade do modal */
  isVisible$: Observable<boolean>;

  /** Observable que gerencia os dados do modal */
  modalData$: Observable<ModalData>;

  constructor(private store: Store) {
    this.isVisible$ = this.store.select(selectIsVisible);
    this.modalData$ = this.store.select(selectModalData);
  }

  /**
   * Abre o modal com os dados configurados.
   *
   * Esta função despacha a ação de abrir o modal com título, parágrafo e botões
   * personalizados, utilizando o modalId 'modal-1'.
   */
  showModal() {
    const modalId = 'modal-1';

    this.store.dispatch(
      openModal({
        title: 'Confirmação',
        paragraph: 'Você deseja continuar?',
        buttonPrincipal: { text: 'Sim' },
        buttonSecondary: { text: 'Cancelar' },
        modalId: modalId,
      }),
    );
  }

  /**
   * Ação a ser executada quando o botão principal do modal é clicado.
   *
   * Esta função imprime no console e despacha a ação de fechar o modal.
   */
  onPrincipalAction() {
    console.log('Ação principal executada');
    this.store.dispatch(closeModal({ modalId: 'modal-1' }));
  }

  /**
   * Ação a ser executada quando o botão secundário do modal é clicado.
   *
   * Esta função imprime no console e despacha a ação de fechar o modal.
   */
  onSecondaryAction() {
    console.log('Ação secundária executada');
    this.store.dispatch(closeModal({ modalId: 'modal-1' }));
  }
}
