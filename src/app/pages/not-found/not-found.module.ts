import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundComponent } from './not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';
import { AppFormsModule } from 'app/shared/components/app-forms/app-forms.module';
import { StructuralModule } from 'app/shared/components/structural/structural.module';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [AppFormsModule, CommonModule, NotFoundRoutingModule, StructuralModule],
})
export class NotFoundModule {}
