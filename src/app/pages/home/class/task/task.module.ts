import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { TaskStudentComponent } from './task-student/task-student.component';
import { TaskTeacherComponent } from './task-teacher/task-teacher.component';

@NgModule({
  declarations: [TaskComponent, TaskStudentComponent, TaskTeacherComponent],
  imports: [CommonModule, TaskRoutingModule],
})
export class TaskModule {}
