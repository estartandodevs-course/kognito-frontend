import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StructuralModule } from '../../structural/structural.module';

@NgModule({
  declarations: [StudentComponent, TeacherComponent],
  exports: [StudentComponent, TeacherComponent],
  imports: [CommonModule, StructuralModule],
})
export class HomeViewsModule {}
