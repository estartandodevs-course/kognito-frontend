import { ErrorMapProps } from './error.types';

export const errorMap: ErrorMapProps = {
  401: 'Parece que seu token expirou. Precisamos que você faça o login novamente.',
  404: 'Recurso não encontrado. Verifique se a URL está correta.',
  500: 'Ocorreu um erro interno na API.',
};
