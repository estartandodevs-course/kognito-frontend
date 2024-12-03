import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StructuralModule } from '../../structural/structural.module';
import { AppFormsModule } from '../../app-forms/app-forms.module';

@NgModule({
  declarations: [StudentComponent, TeacherComponent],
  exports: [StudentComponent, TeacherComponent],
  imports: [CommonModule, StructuralModule, AppFormsModule],
})
export class HomeViewsModule {}
