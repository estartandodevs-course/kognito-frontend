import { createAction, props } from '@ngrx/store';

/**
 * Ação para abrir um modal.
 *
 * Esta ação é despachada quando um modal precisa ser exibido. Ela recebe os dados necessários
 * para configurar o modal, como ID, título, parágrafo e textos dos botões.
 *
 * @param {string} modalId - O ID único do modal que será aberto.
 * @param {string} title - O título do modal.
 * @param {string} paragraph - O parágrafo do modal.
 * @param {object} buttonPrincipal - O objeto contendo o texto do botão principal.
 * @param {object} [buttonSecondary] - O objeto contendo o texto do botão secundário (opcional).
 * @returns {Action} - Ação para abrir o modal com as propriedades fornecidas.
 */
export const openModal = createAction(
  '[Modal] Open Modal',
  props<{
    modalId: string;
    title: string;
    paragraph: string;
    buttonPrincipal: { text: string };
    buttonSecondary?: { text: string } | null;
  }>(),
);

/**
 * Ação para fechar um modal.
 *
 * Esta ação é despachada quando um modal precisa ser fechado. Ela recebe o ID do modal
 * a ser fechado para atualizar o estado da aplicação.
 *
 * @param {string} modalId - O ID único do modal que será fechado.
 * @returns {Action} - Ação para fechar o modal com o ID fornecido.
 */
export const closeModal = createAction(
  '[Modal] Close Modal',
  props<{
    modalId: string;
  }>(),
);
