import { createReducer, on } from '@ngrx/store';
import { openModal, closeModal } from './modal.actions';
import { ModalState, initialState } from '../../model/modal.model';

/**
 * O reducer responsável por gerenciar o estado do modal.
 *
 * @param {ModalState} state - O estado atual do modal.
 * @param {Action} action - A ação disparada.
 * @returns {ModalState} O novo estado do modal.
 */
export const modalReducer = createReducer(
  initialState,

  /**
   * Função que manipula a ação de abrir o modal.
   *
   * @param {ModalState} state - O estado atual do modal.
   * @param {object} action - A ação de abrir o modal.
   * @param {string} action.title - O título do modal.
   * @param {string} action.paragraph - O parágrafo do modal.
   * @param {object} action.buttonPrincipal - O botão principal do modal.
   * @param {object|null} action.buttonSecondary - O botão secundário do modal (opcional).
   * @param {string} action.modalId - O ID único do modal.
   * @returns {ModalState} O novo estado do modal com a visibilidade ativada e os dados passados.
   */
  on(
    openModal,
    (state, { title, paragraph, buttonPrincipal, buttonSecondary, modalId }): ModalState => ({
      isVisible: true,
      title,
      paragraph,
      buttonPrincipal,
      buttonSecondary,
      modalId,
    }),
  ),

  /**
   * Função que manipula a ação de fechar o modal.
   *
   * @returns {ModalState} O estado inicial do modal, com todos os dados resetados.
   */
  on(
    closeModal,
    (): ModalState => ({
      ...initialState,
    }),
  ),
);
