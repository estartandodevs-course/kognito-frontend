import { Component, Input, OnInit } from '@angular/core';
import { DataProps } from '@components/app-forms/form/form.types';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1Component implements OnInit {
  ngOnInit(): void {
    console.log('<app-step1> renderizado.');
  }
  @Input() disabled: boolean = false;
  currentStep: number = 1;
  totalSteps: number = 3;
  /**
   * Obtém o valor escrito no input do formulário
   */
  inputData(value: DataProps) {
    console.log(value);
  }

  nextStep(): void {
    if (!this.disabled && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }
}
