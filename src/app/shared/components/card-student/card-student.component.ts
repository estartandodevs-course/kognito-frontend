import { Output, Component, Input, EventEmitter } from '@angular/core';

export interface Action {
  icon: string;
  label: string;
  id: string;
}

@Component({
  selector: 'app-card-student',
  templateUrl: './card-student.component.html',
  styleUrl: './card-student.component.scss',
})
export class CardStudentComponent {
  @Input() tags: string[] = [];
  @Input() initial?: string;
  @Input() iconCode?: string;
  @Input() header: string = '';
  @Input() subheader: string = '';
  @Input() subhead?: string;
  @Input() iconDots?: string;
  @Input() actions: Action[] = [];
  @Output() actionEvent = new EventEmitter<string>();

  clickVerticalDot() {
    console.log('fui clicado');
    this.isOptionsOpen = !this.isOptionsOpen;
  }

  clickAction(value: string) {
    this.actionEvent.emit(value);
  }

  isOptionsOpen = false;
}
