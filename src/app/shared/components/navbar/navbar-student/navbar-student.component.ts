import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrls: ['./navbar-student.component.scss', '../navbar.component.scss'],
})
export class NavbarStudentComponent {
  @Input()
  path: string = '';
}
