import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { FormsModule } from '../../shared/components/forms/forms.module';
import { StructuralModule } from '../../shared/components/structural/structural.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, FormsModule, StructuralModule],
})
export class RegisterModule {}
