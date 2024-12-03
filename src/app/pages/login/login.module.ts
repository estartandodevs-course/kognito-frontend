import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AppFormsModule } from 'app/shared/components/app-forms/app-forms.module';
import { StructuralModule } from '../../shared/components/structural/structural.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, AppFormsModule, StructuralModule],
})
export class LoginModule {}
