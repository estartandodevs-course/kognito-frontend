import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { openModal, closeModal } from 'app/core/store/modal/modal.actions';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private store: Store) {}

  /**
   * Abre um modal com o ID fornecido e configura o título, parágrafo e botões padrão.
   *
   * Esta função despacha a ação `openModal` para atualizar o estado da aplicação e exibir o modal.
   *
   * @param {string} modalId - O ID único do modal que será aberto.
   * @returns {void} - Não retorna nada, apenas executa a ação de abrir o modal.
   */
  open(modalId: string): void {
    this.store.dispatch(
      openModal({
        modalId,
        title: '',
        paragraph: '',
        buttonPrincipal: {
          text: '',
        },
      }),
    );
  }

  /**
   * Fecha o modal com o ID fornecido.
   *
   * Esta função despacha a ação `closeModal` para atualizar o estado da aplicação e fechar o modal.
   *
   * @param {string} modalId - O ID único do modal que será fechado.
   * @returns {void} - Não retorna nada, apenas executa a ação de fechar o modal.
   */
  close(modalId: string): void {
    this.store.dispatch(closeModal({ modalId }));
  }
}
