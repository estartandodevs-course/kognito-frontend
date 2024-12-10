import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { AppFormsModule } from '../../../shared/components/app-forms/app-forms.module';
import { StructuralModule } from '../../../shared/components/structural/structural.module';

@NgModule({
  declarations: [StudentComponent],
  imports: [CommonModule, StudentRoutingModule, AppFormsModule, StructuralModule],
})
export class StudentModule {}
