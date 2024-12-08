import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClassRoutingModule } from './class-routing.module';
import { ClassComponent } from './class.component';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { ClassViewsModule } from '@components/dynamicView/class-views/class-views.module';
import { StructuralModule } from '@components/structural/structural.module';

@NgModule({
  declarations: [ClassComponent],
  imports: [CommonModule, ClassRoutingModule, ClassViewsModule, AppFormsModule, StructuralModule],
})
export class ClassModule {}
