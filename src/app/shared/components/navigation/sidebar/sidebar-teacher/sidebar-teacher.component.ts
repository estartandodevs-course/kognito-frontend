import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-teacher',
  templateUrl: './sidebar-teacher.component.html',
  styleUrl: './sidebar-teacher.component.scss',
})
export class SidebarTeacherComponent {
  @Input()
  path: string = '';
}
