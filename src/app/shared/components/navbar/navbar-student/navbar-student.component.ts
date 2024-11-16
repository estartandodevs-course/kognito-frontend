import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-student',
  templateUrl: './navbar-student.component.html',
  styleUrl: './navbar-student.component.scss',
})
export class NavbarStudentComponent {
  @Input()
  path: string = '';
}
