import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-navbar-teacher',
  templateUrl: './navbar-teacher.component.html',
  styleUrl: './navbar-teacher.component.scss',
})
export class NavbarTeacherComponent {
  @Input()
  path: string = '';
}
