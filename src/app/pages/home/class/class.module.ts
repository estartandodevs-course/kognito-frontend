import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
import { ClassStudentsComponent } from './class-students/class-students.component';
import { ClassTasksComponent } from './class-tasks/class-tasks.component';
import { ClassConfigComponent } from './class-config/class-config.component';

@NgModule({
  declarations: [ClassComponent, ClassStudentsComponent, ClassTasksComponent, ClassConfigComponent],
  imports: [CommonModule, ClassRoutingModule],
})
export class ClassModule {}
