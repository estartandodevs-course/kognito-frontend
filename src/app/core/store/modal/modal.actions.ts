import { createAction, props } from '@ngrx/store';
import { PropsModalProps } from './modal.types';

const addModal = createAction(
  '[Modal] Add Modal',
  props<{
    id: string;
    component: string;
    props?: PropsModalProps;
    children?: string;
  }>(),
);

const removeModal = createAction(
  '[Modal] Remove Modal',
  props<{
    id?: string;
  }>(),
);

export const modalActions = { addModal, removeModal };
