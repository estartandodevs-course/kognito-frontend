import { Component } from '@angular/core';

@Component({
  selector: 'app-step-line',
  templateUrl: './step-line.component.html',
  styleUrl: './step-line.component.scss',
})
export class StepLineComponent {
  currentStep = 1;

  nextStep() {
    this.currentStep = this.currentStep + 1;
  }

  previousStep() {
    this.currentStep = this.currentStep - 1;
  }

  submit() {
    alert('AINDA NÃO TA FEITO KKKKKK');
  }
}
