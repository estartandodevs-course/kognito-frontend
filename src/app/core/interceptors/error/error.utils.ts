import { HttpErrorResponse } from '@angular/common/http';
import { errorMap } from './error.variables';

/**
 * Extrai mensagens de erro de uma resposta HTTP.
 *
 * @param {HttpErrorResponse} err - A resposta de erro HTTP a ser processada.
 * @returns {string | string[]} Uma mensagem de erro como uma string ou um array de strings.
 */
export const errorExtractor = (err: HttpErrorResponse): string | string[] => {
  if (err.status in errorMap) {
    return errorMap[err.status];
  }

  if (err.error instanceof ErrorEvent) {
    return `Erro: ${err.error.message}.`;
  }

  if (typeof err.error === 'string') {
    return err.error;
  }

  if (err.error && typeof err.error === 'object') {
    const errorMessages = Object.values(err.error)
      .flat()
      .filter((value) => typeof value === 'string') as string[];

    if (errorMessages) {
      return errorMessages;
    }
  }

  return 'Ocorreu um erro desconhecido.';
};
