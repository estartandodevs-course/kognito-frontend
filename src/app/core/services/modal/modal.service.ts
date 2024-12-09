import { BehaviorSubject, map, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { ModalProps } from './modal.types';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private _modals = new BehaviorSubject<ModalProps[]>([]);

  /**
   * Observable que retorna o modal ativo mais recente na lista.
   *
   * O getter observa o estado interno `_modals` (BehaviorSubject) e mapeia os modais para retornar
   * o último modal da lista. Se a lista estiver vazia, retorna `null`.
   *
   * @returns {Observable<ModalProps | null>} Um Observable que emite o modal ativo mais recente ou `null`
   * quando não há modais na lista.
   */
  get modal$(): Observable<ModalProps | null> {
    return this._modals.asObservable().pipe(
      map((modals) => {
        const modalListLength = modals.length;
        if (modalListLength) {
          return modals[modalListLength - 1];
        }
        return null;
      }),
    );
  }

  /**
   * Adiciona um novo modal à lista de modais, garantindo que não haja duplicatas com base no `id`.
   *
   * Este método verifica se já existe um modal com o mesmo `id` na lista atual.
   * Caso contrário, o novo modal é adicionado à lista, e o estado do BehaviorSubject `_modals` é atualizado.
   *
   * @param {ModalProps} newModal - O modal a ser adicionado. Deve conter uma propriedade única `id`.
   *
   * @returns {void}
   */
  addModal(newModal: ModalProps): void {
    const modalsList = this._modals.getValue();

    if (!modalsList.filter((modal) => modal.id === newModal.id).length) {
      document.body.classList.add('not-overflow');
      this._modals.next([...modalsList, newModal]);
    }
  }

  /**
   * Remove um modal da lista de modais.
   *
   * Este método permite duas operações:
   * - Se um `id` for fornecido, ele remove o modal correspondente ao `id`.
   * - Se nenhum `id` for fornecido, remove o último modal da lista.
   *
   * @param {string} [id] - O identificador do modal a ser removido. Se não for especificado, remove o último modal da lista.
   *
   * @returns {void}
   */
  removeModal(id?: string): void {
    const modalsList = this._modals.getValue();
    let newList: ModalProps[];

    if (id) {
      newList = modalsList.filter((modal) => modal.id !== id);
    } else {
      newList = modalsList.slice(0, -1);
    }

    if (!newList.length) {
      document.body.classList.remove('not-overflow');
    }

    this._modals.next(newList);
  }
}
