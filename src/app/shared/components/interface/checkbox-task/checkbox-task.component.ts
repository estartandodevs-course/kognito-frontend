import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-checkbox-task',
  templateUrl: './checkbox-task.component.html',
  styleUrls: ['./checkbox-task.component.scss'],
})
export class CheckBoxTaskComponent {
  @Input() taskLabel: string = '';
  @Input() isChecked = false;
}
