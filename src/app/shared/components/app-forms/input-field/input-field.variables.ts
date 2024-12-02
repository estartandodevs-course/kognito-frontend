import { createCustomValidator } from './input-field.utils';
import { Validators } from '@angular/forms';

/**
 * Objeto que centraliza todos os validadores personalizados.
 * Ele mapeia o tipo de validação para os validadores específicos.
 */
export const validationSchemes = {
  required: createCustomValidator('required', Validators.required, 'Este campo é obrigatório.'),

  email: createCustomValidator('email', Validators.email, 'Por favor, insira um e-mail válido.'),

  cpf: createCustomValidator('cpf', Validators.minLength(14), 'O CPF deve possuir 11 dígitos.'),

  minLenght: (minLenght: number) =>
    createCustomValidator(
      'minLenght',
      Validators.minLength(minLenght),
      `Este campo deve possuir no mínimo ${minLenght} caracteres.`,
    ),

  date: (currentDate: number) =>
    createCustomValidator(
      'date',
      (control) => new Date(control.value).getTime() >= currentDate,
      'Por favor, insira uma data válida.',
    ),

  password: [
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
  ],
};
