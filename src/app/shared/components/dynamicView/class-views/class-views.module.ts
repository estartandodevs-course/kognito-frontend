import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfigComponent } from './config/config.component';
import { StudentsComponent } from './students/students.component';
import { TasksComponent } from './tasks/tasks.component';

@NgModule({
  declarations: [ConfigComponent, StudentsComponent, TasksComponent],
  exports: [ConfigComponent, StudentsComponent, TasksComponent],
  imports: [CommonModule],
})
export class ClassViewsModule {}
