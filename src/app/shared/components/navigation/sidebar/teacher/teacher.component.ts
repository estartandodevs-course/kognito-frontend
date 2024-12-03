import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss', '../sidebar.component.scss'],
})
export class TeacherComponent {
  @Input()
  path: string = '';
}
