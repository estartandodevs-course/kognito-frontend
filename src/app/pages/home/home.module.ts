import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StructuralModule } from 'app/shared/components/structural/structural.module';
import { HomeViewsModule } from 'app/shared/components/dynamicView/home-views/home-views.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CreateTaskModule } from './class/create-task/create-task.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HomeViewsModule, StructuralModule, CreateTaskModule],
})
export class HomeModule {}
