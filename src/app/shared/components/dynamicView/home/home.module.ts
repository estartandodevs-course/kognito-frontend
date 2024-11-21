import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

import { DisplayModule } from '../../display/display.module';
import { FormsModule } from '../../forms/forms.module';

@NgModule({
  declarations: [StudentComponent, TeacherComponent],
  imports: [CommonModule, DisplayModule, FormsModule],
})
export class HomeModule {}
