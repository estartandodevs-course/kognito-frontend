import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface Action {
  icon: string;
  id: string;
}

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrl: './subheader.component.scss',
})
export class SubheaderComponent {
  @Input() title = '';
  @Input() actions: Action[] = [];
  @Output() actionEvent = new EventEmitter<string>();

  clickAction(value: string) {
    this.actionEvent.emit(value);
  }
}
