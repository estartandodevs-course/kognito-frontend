import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTaskRoutingModule } from './create-task-routing.module';
import { CreateTaskComponent } from './create-task.component';
import { Step1Component } from './step1/step1.component';
import { Step2Component } from './step2/step2.component';
import { Step3Component } from './step3/step3.component';
import { StructuralModule } from '../../../../shared/components/structural/structural.module';
import { FormsModule } from '../../../../shared/components/forms/forms.module';
import { NavbarModule } from '../../../../shared/components/navigation/navbar/navbar.module';
import { DisplayModule } from '../../../../shared/components/display/display.module';

@NgModule({
  declarations: [CreateTaskComponent, Step1Component, Step2Component, Step3Component],
  imports: [CommonModule, CreateTaskRoutingModule, StructuralModule, FormsModule, NavbarModule, DisplayModule],
})
export class CreateTaskModule {}
