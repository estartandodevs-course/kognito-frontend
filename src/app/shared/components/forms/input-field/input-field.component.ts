import { Component, Input } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';

import { DontWriteProps, CapitalizeWordProps, SetFormatProps } from 'app/shared/directives/writing/writing.types';
import { TimeCaptureService } from 'app/core/services/time-capture.service';
import { validationSchemes } from './input-field.variables';
import { CustomValidations } from './input-field.types';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent {
  @Input() formControlName?: string;
  @Input() placeholder = 'Placeholder não definido';
  @Input() label = 'Label não definido';
  @Input() type: 'text' | 'text-area' | 'datetime' | 'email' | 'password' | 'grade' | 'cpf' = 'text';

  @Input() extraValidations: CustomValidations[] = [];
  @Input() minLenght?: number;
  @Input() maxLenght?: number;

  @Input() required = false;
  @Input() disabled = false;

  @Input() capitalize: CapitalizeWordProps = false;
  @Input() dontWrite?: DontWriteProps;

  // Obtem as validações do input.
  control = new FormControl('', this._validations);

  constructor(private _time: TimeCaptureService) {}

  /**
   * Método que retorna um array de validadores personalizados (ValidatorFn[]) baseados nas propriedades do componente.
   *
   * Este método cria e adiciona validadores personalizados para campos de entrada de diferentes tipos, como 'email', 'password', 'grade', 'datetime', e 'cpf'.
   * O retorno é um array de funções de validação (ValidatorFn) que são aplicadas ao campo conforme os requisitos configurados.
   *
   * @returns {ValidatorFn[]} Um array de funções de validação a serem aplicadas ao campo de entrada.
   *
   */
  private get _validations(): ValidatorFn[] {
    const baseValidators: ValidatorFn[] = [];

    if (this.required) {
      baseValidators.push(validationSchemes.required);
    }

    if (this.minLenght) {
      baseValidators.push(validationSchemes.minLenght(this.minLenght));
    }

    if (this.type === 'datetime') {
      const currentDate = this._time.getCurrentDate().getTime();
      baseValidators.push(validationSchemes.date(currentDate));
    } else if (this.type !== 'text' && this.type !== 'text-area') {
      baseValidators.concat(validationSchemes[this.type]);
    }

    return baseValidators;
  }

  /**
   * Método que retorna o tipo de input HTML correspondente ao tipo de campo.
   *
   * O tipo de input pode ser 'number' para os tipos 'cpf' e 'grade',
   * 'datetime-local' para o tipo 'datetime', ou o tipo original
   * caso contrário (como 'text', 'email', etc.).
   *
   * @returns {string} O tipo de input HTML, como 'number', 'datetime-local', ou o tipo original.
   *
   */
  getType(): string {
    if (this.type === 'cpf' || this.type === 'grade') {
      return 'text';
    } else if (this.type === 'datetime') {
      return 'datetime-local';
    }
    return this.type;
  }

  /**
   * Método que retorna o formato específico do campo baseado no tipo.
   *
   * Para os tipos 'cpf' e 'grade', o formato retornado será o próprio tipo.
   * Para outros tipos, o formato é indefinido e será retornado como `undefined`.
   *
   * @returns {SetFormatProps | undefined} O formato do campo, ou `undefined` caso não tenha um formato específico.
   *
   */
  getFormat(): SetFormatProps | undefined {
    if (this.type === 'cpf' || this.type === 'grade') {
      return this.type;
    }
    return undefined;
  }
}
