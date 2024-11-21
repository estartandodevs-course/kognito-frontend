import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

@NgModule({
  declarations: [StudentComponent, TeacherComponent],
  imports: [CommonModule],
})
export class TaskModule {}
