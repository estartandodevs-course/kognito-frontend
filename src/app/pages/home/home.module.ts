import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderHomeComponent } from './header-home/header-home.component';

@NgModule({
  declarations: [HomeComponent, HeaderHomeComponent],
  exports: [HeaderHomeComponent],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {}
