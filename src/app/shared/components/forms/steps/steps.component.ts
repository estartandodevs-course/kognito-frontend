import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent {
  @Input() isGrid: boolean = false;

  /**
   * O passo atual na sequência de progresso.
   */
  currentStep = 1;

  /**
   * O número total de passos que o componente controla.
   */
  totalSteps = 3;

  /**
   * Retorna a largura da barra de progresso como uma string de porcentagem.
   */
  getProgressWidth(): string {
    return ((this.currentStep / this.totalSteps) * 100).toFixed(2) + '%';
  }

  /**
   * Avança para o próximo passo.
   */
  goToNextStep(): void {
    if (this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }
}
