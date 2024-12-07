import { createReducer, on } from '@ngrx/store';

import { initialModalState } from './modal.variables';
import { ModalStateProps } from './modal.types';
import { modalActions } from './modal.actions';

export const modalReducer = createReducer(
  initialModalState,
  on(
    modalActions.addModal,
    (state, { id, component, props, children }): ModalStateProps => ({
      ...state,
      modals: [...state.modals, { id, component, props, children }],
    }),
  ),
  on(modalActions.removeModal, (state, { id }): ModalStateProps => {
    if (id) {
      // Retira o modal com o id.
      return { ...state, modals: state.modals.filter((modal) => modal.id !== id) };
    }

    // Se id for undefined, remove o último modal da lista.
    const updatedModals = state.modals.slice(0, -1);
    return { ...state, modals: updatedModals };
  }),
);
