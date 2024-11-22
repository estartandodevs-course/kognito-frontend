import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassViewsModule } from 'app/shared/components/dynamicView/class-views/class-views.module';
import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';

@NgModule({
  declarations: [ClassComponent],
  imports: [CommonModule, ClassRoutingModule, ClassViewsModule],
})
export class ClassModule {}
