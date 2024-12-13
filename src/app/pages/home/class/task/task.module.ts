import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskViewsModule } from '@components/dynamicView/task-views/task-views.module';
import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';

import { AppFormsModule } from '../../../../shared/components/app-forms/app-forms.module';
import { NavbarModule } from '../../../../shared/components/navigation/navbar/navbar.module';
import { StructuralModule } from '../../../../shared/components/structural/structural.module';
import { SidebarModule } from '../../../../shared/components/navigation/sidebar/sidebar.module';

import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { NavbarModule } from '@components/navigation/navbar/navbar.module';
import { StructuralModule } from '@components/structural/structural.module';


@NgModule({
  declarations: [TaskComponent],
  imports: [CommonModule, TaskRoutingModule, TaskViewsModule, AppFormsModule, NavbarModule, StructuralModule, SidebarModule],
})
export class TaskModule {}
