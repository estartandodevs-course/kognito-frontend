export interface PropsModalProps {
  [key: string]: unknown;
}

export interface ModalProps {
  id: string;
  component: string;
  props?: PropsModalProps;
  children?: string;
}

export interface ModalStateProps {
  modals: ModalProps[];
}
