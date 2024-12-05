import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { ClassViewsModule } from '@components/dynamicView/class-views/class-views.module';

@NgModule({
  declarations: [ClassComponent],
  imports: [CommonModule, ClassRoutingModule, ClassViewsModule, AppFormsModule],
})
export class ClassModule {}
