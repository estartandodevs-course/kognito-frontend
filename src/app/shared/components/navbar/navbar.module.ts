import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { NavbarTeacherComponent } from './navbar-teacher/navbar-teacher.component';
import { NavbarStudentComponent } from './navbar-student/navbar-student.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@NgModule({
  declarations: [NavbarComponent, NavbarTeacherComponent, NavbarStudentComponent],
  imports: [CommonModule, RouterLink, RouterLinkActive],
  exports: [NavbarComponent],
})
export class NavbarModule {}
