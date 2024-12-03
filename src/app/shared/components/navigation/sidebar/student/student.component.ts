import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss', '../sidebar.component.scss'],
})
export class StudentComponent {
  @Input()
  path: string = '';
}
