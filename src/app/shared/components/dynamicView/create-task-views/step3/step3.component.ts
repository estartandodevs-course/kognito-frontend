import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrl: './step3.component.scss',
})
export class Step3Component implements OnInit {
  @Output() submitClick = new EventEmitter<void>();

  ngOnInit(): void {
    console.log('<app-step3> renderizado.');
  }
  endSteps(): void {
    this.submitClick.emit();
  }
}
