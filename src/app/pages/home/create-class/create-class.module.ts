import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateClassRoutingModule } from './create-class-routing.module';
import { CreateClassComponent } from './create-class.component';
import { FormsModule } from '../../../shared/components/forms/forms.module';

@NgModule({
  declarations: [CreateClassComponent],
  imports: [CommonModule, CreateClassRoutingModule, FormsModule],
})
export class CreateClassModule {}
