/**
 * Representa o estado de um modal na aplicação.
 *
 * @interface ModalState
 */
export interface ModalState {
  /** O ID único do modal. */
  modalId: string;

  /** Flag que indica se o modal está visível ou não. */
  isVisible: boolean;

  /** O título do modal. Opcional. */
  title?: string;

  /** O parágrafo do modal. Opcional. */
  paragraph?: string;

  /** O botão principal do modal. Contém o texto do botão. Opcional. */
  buttonPrincipal?: { text: string };

  /** O botão secundário do modal. Contém o texto do botão ou `null` se não houver. Opcional. */
  buttonSecondary?: { text: string } | null;
}

/**
 * O estado inicial do modal, com valores padrão.
 *
 * @constant initialState
 * @type {ModalState}
 */
export const initialState: ModalState = {
  modalId: '',
  isVisible: false,
  title: '',
  paragraph: '',
  buttonPrincipal: { text: '' },
  buttonSecondary: null,
};

/**
 * Representa os dados de um modal para exibição na interface do usuário.
 *
 * @interface ModalData
 */
export interface ModalData {
  /** O ID único do modal. */
  modalId: string;

  /** Flag que indica se o modal está visível ou não. */
  isVisible: boolean;

  /** O título do modal. Opcional. */
  title?: string;

  /** O parágrafo do modal. Opcional. */
  paragraph?: string;

  /** O texto do botão principal. Obrigatório. */
  buttonPrincipal: { text: string } | undefined;

  /** O texto do botão secundário. Opcional, pode ser `null` se não houver um botão secundário. */
  buttonSecondary?: { text: string } | null;
}
