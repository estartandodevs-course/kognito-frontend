import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarTeacherComponent } from './sidebar-teacher/sidebar-teacher.component';
import { SidebarStudentComponent } from './sidebar-student/sidebar-student.component';
import { SidebarItemComponent } from './sidebar-item/sidebar-item.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  declarations: [SidebarTeacherComponent, SidebarStudentComponent, SidebarItemComponent, SidebarComponent],
  imports: [CommonModule, RouterLink, RouterLinkActive],
  exports: [SidebarComponent],
})
export class SidebarModule {}
