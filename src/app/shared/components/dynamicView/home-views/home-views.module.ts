import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StructuralModule } from '@components/structural/structural.module';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { InterfaceModule } from '@components/interface/interface.module';
import { NavigationModule } from '@components/navigation/navigation.module';

@NgModule({
  declarations: [StudentComponent, TeacherComponent],
  exports: [StudentComponent, TeacherComponent],
  imports: [CommonModule, StructuralModule, AppFormsModule, InterfaceModule, NavigationModule],
})
export class HomeViewsModule {}
