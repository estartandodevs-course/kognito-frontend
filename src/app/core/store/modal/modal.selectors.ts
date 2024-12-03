import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ModalState } from '../../model/modal.model';

/**
 * Seleciona o estado do modal a partir do estado global.
 *
 * @returns {Selector} O seletor que retorna o estado completo do modal.
 */
export const selectModalState = createFeatureSelector<ModalState>('modal');

/**
 * Seleciona a propriedade `isVisible` do estado do modal.
 *
 * @param {ModalState} state - O estado atual do modal.
 * @returns {boolean} O valor da visibilidade do modal (true ou false).
 */
export const selectIsVisible = createSelector(selectModalState, (state) => state.isVisible);

/**
 * Seleciona os dados do modal, incluindo a visibilidade, ID, título, parágrafo e botões.
 *
 * @param {ModalState} state - O estado atual do modal.
 * @returns {object} Um objeto com as propriedades do modal, incluindo `isVisible`, `modalId`, `title`, `paragraph`, `buttonPrincipal` e `buttonSecondary`.
 */
export const selectModalData = createSelector(selectModalState, (state) => ({
  isVisible: state.isVisible,
  modalId: state.modalId,
  title: state.title,
  paragraph: state.paragraph,
  buttonPrincipal: state.buttonPrincipal || { text: '' },
  buttonSecondary: state.buttonSecondary,
}));
