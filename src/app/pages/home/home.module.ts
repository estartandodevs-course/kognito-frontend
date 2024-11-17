import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { HeaderHomeComponent } from './header-home/header-home.component';

@NgModule({
  declarations: [HomeComponent, HomeStudentComponent, HomeTeacherComponent, HeaderHomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
