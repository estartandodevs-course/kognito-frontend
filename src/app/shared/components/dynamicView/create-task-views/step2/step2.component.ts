import { Component, Input, OnInit } from '@angular/core';
import { DataProps } from '@components/app-forms/form/form.types';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
})
export class Step2Component implements OnInit {
  ngOnInit(): void {
    console.log('<app-step2> renderizado.');
  }
  inputData(value: DataProps) {
    console.log(value);
  }

  @Input() disabled: boolean = false;
  currentStep: number = 1;
  totalSteps: number = 3;

  nextStep(): void {
    if (!this.disabled && this.currentStep < this.totalSteps) {
      this.currentStep++;
    }
  }

  previousStep(): void {
    if (!this.disabled && this.currentStep > 1) {
      this.currentStep--;
    }
  }
}
