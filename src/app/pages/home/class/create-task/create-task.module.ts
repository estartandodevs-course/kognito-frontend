import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTaskRoutingModule } from './create-task-routing.module';
import { StepLineComponent } from './step-line/step-line.component';
import { CreateTaskComponent } from './create-task.component';
import { StructuralModule } from '../../../../shared/components/structural/structural.module';
import { DisplayModule } from '../../../../shared/components/display/display.module';
import { InterfaceModule } from '../../../../shared/components/interface/interface.module';
import { FormsModule } from '../../../../shared/components/forms/forms.module';
import { NavbarModule } from '../../../../shared/components/navigation/navbar/navbar.module';

@NgModule({
  declarations: [CreateTaskComponent, StepLineComponent],
  imports: [CommonModule, CreateTaskRoutingModule, StructuralModule, DisplayModule, InterfaceModule, FormsModule, NavbarModule],
  exports: [CreateTaskComponent, StepLineComponent],
})
export class CreateTaskModule {}
