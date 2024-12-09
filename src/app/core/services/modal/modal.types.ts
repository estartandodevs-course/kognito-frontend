import { Type } from '@angular/core';

export interface PropsModalProps<T = unknown> {
  [key: string]: T;
}

export interface ModalProps {
  id: string;
  component: Type<unknown>;
  props?: PropsModalProps;
}
