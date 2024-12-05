import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentComponent } from './student/student.component';
import { ItemComponent } from './item/item.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { LogoutButtonComponent } from './logout-button/logout-button.component';

@NgModule({
  declarations: [TeacherComponent, StudentComponent, ItemComponent, SidebarComponent, LogoutButtonComponent],
  imports: [CommonModule, RouterLink, RouterLinkActive],
  exports: [SidebarComponent],
})
export class SidebarModule {}
