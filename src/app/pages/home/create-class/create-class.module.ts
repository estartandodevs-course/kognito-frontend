import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateClassRoutingModule } from './create-class-routing.module';
import { CreateClassComponent } from './create-class.component';

@NgModule({
  declarations: [CreateClassComponent],
  imports: [CommonModule, CreateClassRoutingModule],
})
export class CreateClassModule {}