import { Component } from '@angular/core';
import { DataProps } from '@components/app-forms/form/form.types';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {
  isStepLineEnabled: boolean = false;

  /**
   * Alterna o estado de habilitação da linha de etapa.
   *
   * Esta função altera o valor da variável `isStepLineEnabled` entre `true` e `false`.
   * Quando o valor de `isStepLineEnabled` é `true`, a linha de etapa é ativada. Quando é `false`, ela é desativada.
   */
  toggleStepLine() {
    this.isStepLineEnabled = !this.isStepLineEnabled;
  }
  /**
   * Obtém o valor escrito no input do formulário
   */
  inputData(value: DataProps) {
    console.log(value);
  }
}
