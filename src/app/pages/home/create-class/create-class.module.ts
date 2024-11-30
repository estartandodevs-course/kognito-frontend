import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateClassRoutingModule } from './create-class-routing.module';
import { CreateClassComponent } from './create-class.component';
import { FormsModule } from '../../../shared/components/forms/forms.module';
import { StructuralModule } from '../../../shared/components/structural/structural.module';

@NgModule({
  declarations: [CreateClassComponent],
  imports: [CommonModule, CreateClassRoutingModule, FormsModule, StructuralModule],
})
export class CreateClassModule {}
