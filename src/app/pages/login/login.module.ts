import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { FormsModule } from '../../shared/components/forms/forms.module';
import { StructuralModule } from '../../shared/components/structural/structural.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule, StructuralModule],
})
export class LoginModule {}
