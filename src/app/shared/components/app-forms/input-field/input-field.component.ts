import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, ValidatorFn } from '@angular/forms';
import { Subscription, debounceTime } from 'rxjs';

import { DontWriteProps, CapitalizeWordProps, SetFormatProps } from 'app/shared/directives/writing/writing.types';
import { TimeCaptureService } from 'app/core/services/time-capture.service';
import { createCustomValidator } from './input-field.utils';
import { validationSchemes } from './input-field.variables';
import { CustomValidationsProps } from './input-field.types';

@Component({
  selector: 'app-input-field',
  templateUrl: './input-field.component.html',
  styleUrl: './input-field.component.scss',
})
export class InputFieldComponent implements OnInit, OnDestroy {
  @Input() formControlName!: string;
  @Input() placeholder = 'Placeholder não definido';
  @Input() label = 'Label não definido';
  @Input() type: 'text' | 'textarea' | 'datetime-local' | 'email' | 'password' | 'grade' | 'cpf' = 'text';

  @Input() extraValidations: CustomValidationsProps[] = [];
  @Input() equalTo: string | null = null;
  @Input() maxLenght: number | null = null;
  @Input() minLenght?: number;

  @Input() required = false;
  @Input() disabled = false;

  @Input() capitalize: CapitalizeWordProps = false;
  @Input() dontWrite?: DontWriteProps;

  @Output() onchange = new EventEmitter<string>();

  private _subscription!: Subscription;
  passwordVisible = false;

  // Armazena as validações do input.
  control!: FormControl;

  constructor(private _time: TimeCaptureService) {}

  /**
   * Método que retorna um array de validadores personalizados (ValidatorFn[]) baseados nas propriedades do componente.
   *
   * Este método cria e adiciona validadores personalizados para campos de entrada de diferentes tipos, como 'email', 'password', 'grade', 'datetime', e 'cpf'.
   * O retorno é um array de funções de validação (ValidatorFn) que são aplicadas ao campo conforme os requisitos configurados.
   *
   * @returns {ValidatorFn[]} Um array de funções de validação a serem aplicadas ao campo de entrada.
   */
  private get _validations(): ValidatorFn[] {
    const baseValidators: ValidatorFn[] = [];

    if (this.required) {
      baseValidators.push(validationSchemes.required);
    }

    if (this.minLenght) {
      baseValidators.push(validationSchemes.minLenght(this.minLenght));
    }

    if (!this.formControlName && this.equalTo) {
      baseValidators.push(
        createCustomValidator(
          'equalTo',
          (control) => control.value === this.equalTo,
          'O valor informado neste campo não coincide com o esperado.',
        ),
      );
    }

    // Adiciona as validações extras.
    this.extraValidations.forEach((validation) => {
      const { validatorName, condiction, messageError } = validation;
      baseValidators.push(createCustomValidator(validatorName, condiction, messageError));
    });

    if (this.type === 'datetime-local') {
      const currentDate = this._time.getCurrentDate().getTime();
      baseValidators.push(validationSchemes.date(currentDate));
    } else if (this.type !== 'text' && this.type !== 'textarea' && this.type !== 'grade') {
      const scheme = validationSchemes[this.type];

      // Adiciona as validações.
      if (Array.isArray(scheme)) {
        baseValidators.push(...scheme);
      } else {
        baseValidators.push(scheme);
      }
    }

    return baseValidators;
  }

  /**
   * Verifica se o campo de controle possui erro e está visível.
   *
   * Este getter verifica se o controle possui erros, se o campo foi tocado,
   * e se o campo não está desabilitado. Retorna `true` se todas essas condições forem atendidas,
   * indicando que o erro deve ser exibido, caso contrário, retorna `false`.
   *
   * @returns {boolean} `true` se o campo tem erro, foi tocado e não está desabilitado; caso contrário, `false`.
   */
  get viewError(): boolean {
    return (this.control.errors ?? false) && this.control.touched && !this.disabled;
  }

  /**
   * Retorna o tipo de campo para ser usado, baseado na condição interna.
   *
   * Este método verifica o valor da propriedade `type` e, se o tipo for 'cpf', 'grade', ou 'password' (e a propriedade `passwordVisible` for verdadeira),
   * o tipo retornado será 'text'. Caso contrário, o tipo retornado será o valor atual de `this.type`.
   *
   * @returns {string} O tipo do campo, que pode ser 'text' ou o valor da propriedade `type`.
   */
  getType(): string {
    if (this.type === 'cpf' || this.type === 'grade' || (this.type === 'password' && this.passwordVisible)) {
      return 'text';
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
   */
  getFormat(): SetFormatProps | undefined {
    if (this.type === 'cpf' || this.type === 'grade') {
      return this.type;
    }
    return undefined;
  }

  /**
   * Retorna o modo de entrada adequado com base no tipo do campo.
   *
   * Este método verifica o valor da propriedade `type` e, se o tipo for 'cpf' ou 'grade',
   * o modo de entrada retornado será 'numeric'. Caso contrário, o modo de entrada retornado será o valor atual de `this.type`.
   *
   * @returns {string} O modo de entrada, que pode ser 'numeric' ou o valor da propriedade `type`.
   */
  getInputMode(): string {
    if (this.type === 'cpf' || this.type === 'grade') {
      return 'numeric';
    }
    return this.type;
  }

  /**
   * Obtém os erros do controle em formato de array de strings.
   *
   * @returns {string[]} Uma lista de mensagens de erro associadas ao controle, ou um array vazio se não houver erros.
   */
  getErrors(): string[] {
    return this.control.errors ? Object.values(this.control.errors) : [];
  }

  /**
   * Alterna a visibilidade da senha no campo de entrada.
   */
  toggleVisiblePassword() {
    this.passwordVisible = !this.passwordVisible;
  }

  /**
   * Limpa o valor do controle de entrada.
   */
  clearInput() {
    this.control.setValue('');
  }

  ngOnInit(): void {
    this.control = new FormControl<string>('', this._validations);

    // Dispara onchange passando o valor do input após 500ms.
    this._subscription = this.control.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value: string) => this.onchange.emit(value.trim()));
  }

  ngOnDestroy(): void {
    if (this._subscription) this._subscription.unsubscribe();
  }
}
