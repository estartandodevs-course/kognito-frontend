import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnDestroy, Output, QueryList } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { createCustomValidator } from '../input-field/input-field.utils';
import { InputFieldComponent } from '../input-field/input-field.component';
import { trimmerData, omitKeys } from './form.utils';
import { DataProps } from './form.types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements AfterContentInit, OnDestroy {
  @ContentChildren(InputFieldComponent, { descendants: true }) inputs!: QueryList<InputFieldComponent>;
  @Output() onsubmit = new EventEmitter<DataProps>();
  @Input() updateErrorOn: 'blur' | 'submit' = 'blur';
  @Input() omitKeys: string | string[] = [];

  dynamicForm!: FormGroup;
  private _subcriptions: Subscription[] = [];

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({}, { updateOn: this.updateErrorOn });
  }

  ngAfterContentInit(): void {
    this.inputs.forEach((input) => {
      if (!input.disabled) {
        const controlName = input.formControlName;

        if (controlName) {
          // Cria o formulário dinamicamente.
          this.dynamicForm.addControl(controlName, input.control);

          if (input.equalTo) {
            const targetInput = this.dynamicForm.get(input.equalTo);

            if (targetInput) {
              const equalToValidator = createCustomValidator(
                'equalTo',
                (control) => control.value === targetInput.value,
                'O valor informado neste campo não coincide com o esperado.',
              );

              // Garantir que os validadores existentes sejam preservados
              const existingValidators = input.control.validator ? [input.control.validator] : [];
              input.control.setValidators([...existingValidators, equalToValidator]);

              this._subcriptions.push(
                // Atualiza a validade do controle quando o valor de 'targetInput' mudar.
                targetInput.valueChanges.subscribe(() => {
                  input.control.updateValueAndValidity();
                }),
              );
            } else {
              throw new Error(`Nenhum input com a chave "${input.equalTo}" foi encontrado.`);
            }
          }
        } else {
          throw new Error('O parametro formControlName é obrigatório ao utilizar o input em um formulário.');
        }
      }
    });
  }

  ngOnDestroy(): void {
    // Remove as inscrições feitas no formulário.
    this._subcriptions.forEach((sub) => sub.unsubscribe());
  }

  /**
   * Método para submeter o formulário.
   *
   * Verifica se o formulário (`dynamicForm`) é válido. Se for, aplica funções de transformação nos dados
   * (como remoção de espaços em branco e exclusão de chaves definidas) e emite os dados processados
   * através do evento `onsubmit`.
   */
  submit() {
    this.dynamicForm.markAllAsTouched();

    if (this.dynamicForm.valid) {
      const dataForm = omitKeys(trimmerData(this.dynamicForm.value), this.omitKeys);
      this.onsubmit.emit(dataForm);
    }
  }
}
