import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox-task',
  templateUrl: './checkbox-task.component.html',
  styleUrls: ['./checkbox-task.component.scss'],
})
export class CheckBoxTaskComponent {
  @Input() taskLabel: string = '';
  @Input() isChecked = false;

  @Output() checkChanged = new EventEmitter<boolean>();

  onCheckboxChange() {
    this.checkChanged.emit(this.isChecked);
  }
}
