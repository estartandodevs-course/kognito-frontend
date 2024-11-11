import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check-box-task',
  templateUrl: './check-box-task.component.html',
  styleUrls: ['./check-box-task.component.scss'],
})
export class CheckBoxTaskComponent {
  @Input() taskLabel: string = '';
  isChecked = false;
}
