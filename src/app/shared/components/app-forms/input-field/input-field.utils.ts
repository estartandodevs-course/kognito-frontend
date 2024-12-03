import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { ValidatorProp } from './input-field.types';

/**
 * Cria um validador personalizado para o Angular, que pode ser uma validação baseada em uma função simples (`ValidatorProp`)
 * ou um validador padrão (`ValidatorFn`).
 *
 * @param {string} validatorName - O nome do validador. Usado como a chave no objeto de erros de validação.
 * @param {ValidatorProp | ValidatorFn} validatorCondition - A condição de validação. Pode ser uma função simples de validação (`ValidatorProp`)
 *                                                           ou um validador completo do Angular (`ValidatorFn`).
 * @param {string} errorMessage - A mensagem de erro a ser exibida quando o validador falhar.
 *
 * @returns {ValidatorFn} Um validador do tipo `ValidatorFn` que pode ser usado em um controle de formulário Angular.
 *
 */
export const createCustomValidator = (
  validatorName: string,
  validatorCondition: ValidatorProp | ValidatorFn,
  errorMessage: string,
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const result = validatorCondition(control);

    if (result !== null) {
      // identifica se a condição do validator é válida.
      const isValid = typeof result === 'boolean' ? result : false;

      if (!isValid) {
        return { [validatorName]: errorMessage };
      }
    }
    return null;
  };
};
