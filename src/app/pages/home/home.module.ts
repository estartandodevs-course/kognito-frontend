import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeViewsModule } from 'app/shared/components/dynamicView/home-views/home-views.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, HomeViewsModule],
})
export class HomeModule {}
