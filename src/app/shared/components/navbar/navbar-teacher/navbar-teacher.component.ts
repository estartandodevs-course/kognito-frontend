import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-navbar-teacher',
  templateUrl: './navbar-teacher.component.html',
  styleUrls: ['./navbar-teacher.component.scss', '../navbar.component.scss'],
})
export class NavbarTeacherComponent {
  @Input()
  path: string = '';
}
