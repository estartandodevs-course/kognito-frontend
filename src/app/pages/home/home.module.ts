import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { FormsModule } from '../../shared/components/forms/forms.module';
import { DisplayModule } from '../../shared/components/display/display.module';
import { ComponentsCoreModule } from 'app/core/components-core/components-core.module';

@NgModule({
  declarations: [HomeComponent, HomeStudentComponent, HomeTeacherComponent, HeaderHomeComponent],
  exports: [HeaderHomeComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, DisplayModule, ComponentsCoreModule],
})
export class HomeModule {}
