import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassViewsModule } from 'app/shared/components/dynamicView/class-views/class-views.module';
import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
import { AppFormsModule } from 'app/shared/components/app-forms/app-forms.module';

@NgModule({
  declarations: [ClassComponent],
  imports: [CommonModule, ClassRoutingModule, ClassViewsModule, AppFormsModule],
})
export class ClassModule {}
