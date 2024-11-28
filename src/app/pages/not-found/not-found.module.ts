import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { AppFormsModule } from 'app/shared/components/app-forms/app-forms.module';

@NgModule({
  imports: [CommonModule, NotFoundRoutingModule, AppFormsModule],
})
export class NotFoundModule {}
