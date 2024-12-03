import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { AppFormsModule } from 'app/shared/components/app-forms/app-forms.module';
import { StructuralModule } from '../../shared/components/structural/structural.module';

@NgModule({
  declarations: [RegisterComponent],
  imports: [CommonModule, RegisterRoutingModule, AppFormsModule, StructuralModule],
})
export class RegisterModule {}
