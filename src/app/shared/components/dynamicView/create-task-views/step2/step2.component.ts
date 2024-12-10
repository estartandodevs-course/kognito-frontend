import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DataProps } from '@components/app-forms/form/form.types';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrl: './step2.component.scss',
})
export class Step2Component implements OnInit {
  @Output() nextClick = new EventEmitter<void>();
  @Output() returnClick = new EventEmitter<void>();

  ngOnInit(): void {
    console.log('<app-step2> renderizado.');
  }
  inputData(value: DataProps) {
    console.log(value);
  }

  nextStep(): void {
    this.nextClick.emit();
  }

  previousStep(): void {
    this.returnClick.emit();
  }
}
