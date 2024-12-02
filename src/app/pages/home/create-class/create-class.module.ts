import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateClassRoutingModule } from './create-class-routing.module';
import { CreateClassComponent } from './create-class.component';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { StructuralModule } from '@components/structural/structural.module';

@NgModule({
  declarations: [CreateClassComponent],
  imports: [CommonModule, CreateClassRoutingModule, AppFormsModule, StructuralModule],
})
export class CreateClassModule {}
