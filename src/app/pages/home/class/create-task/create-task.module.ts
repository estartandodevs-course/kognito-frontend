import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTaskRoutingModule } from './create-task-routing.module';
import { CreateTaskComponent } from './create-task.component';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { DisplayModule } from '@components/display/display.module';
import { InterfaceModule } from '@components/interface/interface.module';
import { NavbarModule } from '@components/navigation/navbar/navbar.module';
import { StructuralModule } from '@components/structural/structural.module';

@NgModule({
  declarations: [CreateTaskComponent],
  imports: [
    CommonModule,
    CreateTaskRoutingModule,
    StructuralModule,
    DisplayModule,
    InterfaceModule,
    AppFormsModule,
    NavbarModule,
  ],
  exports: [CreateTaskComponent],
})
export class CreateTaskModule {}
