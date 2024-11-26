import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-step-line',
  templateUrl: './step-line.component.html',
  styleUrl: './step-line.component.scss',
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
  currentStep = 1;

  /**
   * Avança para o próximo passo na linha de etapas.
   *
   * A função aumenta o valor de `currentStep` em 1, permitindo que o usuário avance na sequência de etapas.
   */
  nextStep() {
    this.currentStep = this.currentStep + 1;
  }

  /**
   * Retrocede para o passo anterior na linha de etapas.
   *
   * A função diminui o valor de `currentStep` em 1, permitindo que o usuário retroceda na sequência de etapas.
   */
  previousStep() {
    this.currentStep = this.currentStep - 1;
  }

  /**
   * Função que exibe um alerta informando que a funcionalidade ainda não foi implementada.
   *
   * Este método é um placeholder que simula a ação de envio, mas ainda não realiza nenhuma operação.
   */
  submit() {
    alert('AINDA NÃO TA FEITO KKKKKK');
  }
}
