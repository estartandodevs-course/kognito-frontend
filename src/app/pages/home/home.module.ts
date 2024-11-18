import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { ClasscardComponent } from 'app/shared/components/classcard/classcard.component';

@NgModule({
  declarations: [HomeComponent, HomeStudentComponent, HomeTeacherComponent, ClasscardComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
