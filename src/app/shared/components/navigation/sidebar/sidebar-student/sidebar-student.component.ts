import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-student',
  templateUrl: './sidebar-student.component.html',
  styleUrl: './sidebar-student.component.scss',
})
export class SidebarStudentComponent {
  @Input()
  path: string = '';
}
