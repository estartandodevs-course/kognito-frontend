import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataProps } from '@components/app-forms/form/form.types';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrl: './step1.component.scss',
})
export class Step1Component implements OnInit {
  @Output() nextClick = new EventEmitter<void>();
  ngOnInit(): void {
    console.log('<app-step1> renderizado.');
  }
  // @Input() disabled: boolean = false;
  /**
   * Obtém o valor escrito no input do formulário
   */
  inputData(value: DataProps) {
    console.log(value);
    this.nextClick.emit();
  }

  nextStep(): void {
    this.nextClick.emit();
  }
}
