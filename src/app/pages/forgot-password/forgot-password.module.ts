import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ForgotPasswordRoutingModule } from './forgot-password-routing.module';
import { ForgotPasswordComponent } from './forgot-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { StructuralModule } from '../../shared/components/structural/structural.module';
import { FormsModule } from '../../shared/components/forms/forms.module';
import { SendEmailComponent } from './send-email/send-email.component';

@NgModule({
  declarations: [ForgotPasswordComponent, ChangePasswordComponent, SendEmailComponent],
  imports: [CommonModule, ForgotPasswordRoutingModule, StructuralModule, FormsModule],
})
export class ForgotPasswordModule {}
