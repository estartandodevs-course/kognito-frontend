import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralModule } from '@components/structural/structural.module';
import { HomeViewsModule } from '@components/dynamicView/home-views/home-views.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import { HomeStudentComponent } from './home-student/home-student.component';
import { HomeTeacherComponent } from './home-teacher/home-teacher.component';
import { HeaderHomeComponent } from './header-home/header-home.component';
import { FormsModule } from '../../shared/components/forms/forms.module';
import { DisplayModule } from '../../shared/components/display/display.module';
import { ComponentsCoreModule } from 'app/core/components-core/components-core.module';
import { CardModule } from 'app/shared/components/card/card.module';

@NgModule({
  declarations: [HomeComponent, HomeStudentComponent, HomeTeacherComponent, HeaderHomeComponent],
  exports: [HeaderHomeComponent],
  imports: [CommonModule, HomeRoutingModule, FormsModule, DisplayModule, ComponentsCoreModule, CardModule],


@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HomeViewsModule, StructuralModule],

})
export class HomeModule {}
