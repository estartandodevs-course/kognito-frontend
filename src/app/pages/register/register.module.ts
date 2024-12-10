import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { StructuralModule } from '@components/structural/structural.module';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { HomeViewsModule } from '../../shared/components/dynamicView/home-views/home-views.module';
@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, AppFormsModule, StructuralModule, StudentModule, TeacherModule, HomeViewsModule],
})
export class RegisterModule {}
