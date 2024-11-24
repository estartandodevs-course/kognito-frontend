import { createCustomValidator } from './input-field.utils';
import { Validators } from '@angular/forms';

/**
 * Uma lista de validadores personalizados para a senha, garantindo que ela atenda a vários requisitos de complexidade.
 *
 * Esses validadores verificam se a senha contém:
 * - Pelo menos uma letra minúscula
 * - Pelo menos uma letra maiúscula
 * - Pelo menos um número
 * - Pelo menos um símbolo especial
 *
 * @returns {Array<ValidatorFn>} Um array de funções de validação, cada uma verificando um critério de complexidade de senha.
 */
export const passwordValidators = [
  createCustomValidator(
    'hasLowerCase',
    (control) => /[a-z]/.test(control.value),
    'A senha deve conter pelo menos uma letra minúscula.',
  ),
  createCustomValidator(
    'hasUpperCase',
    (control) => /[A-Z]/.test(control.value),
    'A senha deve conter pelo menos uma letra maiúscula.',
  ),
  createCustomValidator('hasNumber', (control) => /\d/.test(control.value), 'A senha deve conter pelo menos um número.'),
  createCustomValidator(
    'hasSymbol',
    (control) => /[\W_]/.test(control.value),
    'A senha deve conter pelo menos um símbolo especial.',
  ),
];

/**
 * Uma lista de validadores personalizados para a validação de notas.
 *
 * Esses validadores verificam se a nota é:
 * - No mínimo 0.
 * - No máximo 10.
 *
 * @returns {ValidatorFn[]} Um array de validadores personalizados.
 *
 */
export const gradeValidators = [
  createCustomValidator('minGrade', Validators.min(0), 'A nota deve ser no mínimo 0.'),
  createCustomValidator('maxGrade', Validators.max(10), 'A nota deve ser no máximo 10.'),
];
