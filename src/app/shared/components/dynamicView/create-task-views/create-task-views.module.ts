import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { StructuralModule } from '@components/structural/structural.module';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { CheckboxComponent } from './step3/checkbox/checkbox.component';

@NgModule({
  declarations: [Step1Component, Step2Component, Step3Component, CheckboxComponent],
  imports: [CommonModule, StructuralModule, AppFormsModule],
  exports: [Step1Component, Step2Component, Step3Component],
})
export class CreateTaskViewsModule {}
