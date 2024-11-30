import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnavailableRoutingModule } from './unavailable-routing.module';
import { UnavailableComponent } from './unavailable.component';
import { StructuralModule } from '../../shared/components/structural/structural.module';
import { FormsModule } from '../../shared/components/forms/forms.module';

@NgModule({
  declarations: [UnavailableComponent],
  imports: [CommonModule, UnavailableRoutingModule, StructuralModule, FormsModule],
})
export class UnavailableModule {}
