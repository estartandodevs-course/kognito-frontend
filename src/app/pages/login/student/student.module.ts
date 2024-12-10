import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { AppFormsModule } from '../../../shared/components/app-forms/app-forms.module';

@NgModule({
  declarations: [StudentComponent],
  imports: [CommonModule, StudentRoutingModule, AppFormsModule],
})
export class StudentModule {}
