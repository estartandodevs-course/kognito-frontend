import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskViewsModule } from 'app/shared/components/dynamicView/task-views/task-views.module';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';

@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, TaskRoutingModule, TaskViewsModule],
})
export class TaskModule {}
