import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTaskRoutingModule } from './create-task-routing.module';
import { CreateTaskComponent } from './create-task.component';
import { DisplayModule } from '@components/display/display.module';
import { InterfaceModule } from '@components/interface/interface.module';
import { NavbarModule } from '@components/navigation/navbar/navbar.module';
import { CreateTaskViewsModule } from '@components/dynamicView/create-task-views/create-task-views.module';
import { StructuralModule } from '@components/structural/structural.module';
import { AppFormsModule } from '@components/app-forms/app-forms.module';

@NgModule({
  declarations: [CreateTaskComponent],
  imports: [
    CommonModule,
    CreateTaskRoutingModule,
    DisplayModule,
    InterfaceModule,
    NavbarModule,
    CreateTaskViewsModule,
    StructuralModule,
    AppFormsModule,
  ],
  exports: [CreateTaskComponent],
})
export class CreateTaskModule {}
