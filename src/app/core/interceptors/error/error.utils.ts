import { HttpErrorResponse } from '@angular/common/http';

/**
 * Extrai mensagens de erro de uma resposta HTTP.
 *
 * @param {HttpErrorResponse} err - A resposta de erro HTTP a ser processada.
 * @returns {string | string[]} Uma mensagem de erro como uma string ou um array de strings.
 */
export const errorExtractor = (err: HttpErrorResponse): string | string[] => {
  if (err.error instanceof ErrorEvent) {
    return `Erro: ${err.error.message}.`;
  }

  if (err.error && typeof err.error === 'object') {
    return Object.values(err.error)
      .flat()
      .map((val) => String(val));
  }

  if (typeof err.error === 'string') {
    return err.error;
  }

  return 'Ocorreu um erro desconhecido.';
};
