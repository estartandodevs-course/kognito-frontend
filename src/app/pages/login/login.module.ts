import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { StructuralModule } from '@components/structural/structural.module';
import { HomeViewsModule } from '@components/dynamicView/home-views/home-views.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, LoginRoutingModule, AppFormsModule, StructuralModule, HomeViewsModule],
})
export class LoginModule {}
