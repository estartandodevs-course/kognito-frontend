import { Component, Input } from '@angular/core';
import { DataProps } from '@components/app-forms/form/form.types';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {
  // isStepLineEnabled: boolean = false;

  /**
   * Alterna o estado de habilitação da linha de etapa.
   *
   * Esta função altera o valor da variável `isStepLineEnabled` entre `true` e `false`.
   * Quando o valor de `isStepLineEnabled` é `true`, a linha de etapa é ativada. Quando é `false`, ela é desativada.
   */
  // toggleStepLine() {
  //   this.isStepLineEnabled = !this.isStepLineEnabled;
  // }

  /**
   * Define se a linha de etapas está desabilitada ou não.
   *
   * A propriedade `disabled` é usada para controlar se a linha de etapas deve ser visualmente desabilitada.
   * O valor padrão é `false`, o que significa que a linha de etapas está habilitada.
   */
  @Input() showSteps: boolean = false;

  /** Armazena o passo atual da linha de etapas. */
  currentStep: number = 0;

  /** Número total de passos na linha de etapas. */
  totalSteps: number = 3;

  /**
   * Avança para o próximo passo na linha de etapas.
   *
   * A função aumenta o valor de `currentStep` em 1, permitindo que o usuário avance na sequência de etapas.
   * A navegação só ocorre se `disabled` for `false` e `currentStep` for menor que `totalSteps`.
   */
  nextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  /**
   * Retrocede para o passo anterior na linha de etapas.
   *
   *
 A função diminui o valor de `currentStep` em 1, permitindo que o usuário retroceda na sequência de etapas.
   * A navegação só ocorre se `disabled` for `false` e `currentStep` for maior que 1.
   */
  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  /**
   * Obtém o valor escrito no input do formulário
   */
  inputData(value: DataProps) {
    console.log(value);
  }
  /**
   * Finaliza o processo ou exibe uma mensagem de confirmação.
   *
   * Simula a conclusão da linha de etapas com uma mensagem de sucesso.
   */
  submit(): void {
    if (!this.showSteps && this.currentStep === this.totalSteps) {
      alert('Tarefa enviada com sucesso!');
    }
  }
  startCreate(): void {
    this.currentStep = 1;
    this.showSteps = true;
  }
}
