import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-line',
  templateUrl: './step-line.component.html',
  styleUrls: ['./step-line.component.scss'],
})
export class StepLineComponent {
  /**
   * Define se a linha de etapas está desabilitada ou não.
   *
   * A propriedade `disabled` é usada para controlar se a linha de etapas deve ser visualmente desabilitada.
   * O valor padrão é `false`, o que significa que a linha de etapas está habilitada.
   */
  @Input() disabled: boolean = false;

  /** Armazena o passo atual da linha de etapas. */
  currentStep: number = 1;

  /** Número total de passos na linha de etapas. */
  totalSteps: number = 3;

  /**
   * Avança para o próximo passo na linha de etapas.
   *
   * A função aumenta o valor de `currentStep` em 1, permitindo que o usuário avance na sequência de etapas.
   * A navegação só ocorre se `disabled` for `false` e `currentStep` for menor que `totalSteps`.
   */
  nextStep(): void {
    if (!this.disabled && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  /**
   * Retrocede para o passo anterior na linha de etapas.
   *
   * A função diminui o valor de `currentStep` em 1, permitindo que o usuário retroceda na sequência de etapas.
   * A navegação só ocorre se `disabled` for `false` e `currentStep` for maior que 1.
   */
  previousStep(): void {
    if (!this.disabled && this.currentStep > 1) {
      this.currentStep--;
    }
  }

  /**
   * Finaliza o processo ou exibe uma mensagem de confirmação.
   *
   * Simula a conclusão da linha de etapas com uma mensagem de sucesso.
   */
  submit(): void {
    if (!this.disabled && this.currentStep === this.totalSteps) {
      alert('Tarefa enviada com sucesso!');
    }
  }
}
