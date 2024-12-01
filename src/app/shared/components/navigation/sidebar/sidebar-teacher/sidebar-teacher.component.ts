import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-teacher',
  templateUrl: './sidebar-teacher.component.html',
  styleUrls: ['./sidebar-teacher.component.scss', '../sidebar.component.scss'],
})
export class SidebarTeacherComponent {
  @Input()
  path: string = '';
}
