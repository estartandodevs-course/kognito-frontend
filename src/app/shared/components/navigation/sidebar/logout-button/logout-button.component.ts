import { Component, Input, Output, EventEmitter } from '@angular/core';

export interface Action {
  id: string;
}

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.scss',
})
export class LogoutButtonComponent {
  @Input()
  routerLink: string = '';
  @Input()
  dataIcon: string = '';
  @Input()
  label: string = '';
  @Input() actions: Action[] = [];
  @Output() actionEvent = new EventEmitter<string>();

  clickAction(value: string) {
    this.actionEvent.emit(value);
    console.log('oi');
  }
}
