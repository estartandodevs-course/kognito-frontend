import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateTaskRoutingModule } from './create-task-routing.module';
import { CreateTaskComponent } from './create-task.component';
import { CreateTaskStep1Component } from './create-task-step1/create-task-step1.component';
import { CreateTaskStep2Component } from './create-task-step2/create-task-step2.component';
import { CreateTaskStep3Component } from './create-task-step3/create-task-step3.component';

@NgModule({
  declarations: [CreateTaskComponent, CreateTaskStep1Component, CreateTaskStep2Component, CreateTaskStep3Component],
  imports: [CommonModule, CreateTaskRoutingModule],
})
export class CreateTaskModule {}
