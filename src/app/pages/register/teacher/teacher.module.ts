import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { StructuralModule } from '@components/structural/structural.module';

@NgModule({
  declarations: [TeacherComponent],
  imports: [CommonModule, TeacherRoutingModule, AppFormsModule, StructuralModule],
})
export class TeacherModule {}
