import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CardStudentComponent } from './card-student/card-student.component';
import { CheckBoxTaskComponent } from './checkbox-task/checkbox-task.component';
import { NeuroTagsComponent } from './neuro-tags/neuro-tags.component';
import { StepsComponent } from './steps/steps.component';
import { StructuralModule } from '@components/structural/structural.module';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [CheckBoxTaskComponent, NeuroTagsComponent, StepsComponent, CardStudentComponent, CalendarComponent],

  imports: [CommonModule, FormsModule, StructuralModule, AppFormsModule],
  exports: [StepsComponent, NeuroTagsComponent, CardStudentComponent, CheckBoxTaskComponent, CalendarComponent],
})
export class InterfaceModule {}
