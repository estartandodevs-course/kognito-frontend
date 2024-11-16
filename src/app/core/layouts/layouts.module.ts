import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutTeacherComponent } from './layout-teacher/layout-teacher.component';
import { LayoutStudentComponent } from './layout-student/layout-student.component';

@NgModule({
  declarations: [LayoutTeacherComponent, LayoutStudentComponent],
  imports: [CommonModule],
})
export class LayoutsModule {}
