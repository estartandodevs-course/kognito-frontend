import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-student',
  templateUrl: './sidebar-student.component.html',
  styleUrls: ['./sidebar-student.component.scss', '../sidebar.component.scss'],
})
export class SidebarStudentComponent {
  @Input()
  path: string = '';
}
