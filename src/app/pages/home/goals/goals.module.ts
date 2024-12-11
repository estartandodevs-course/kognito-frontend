import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';
import { StructuralModule } from '../../../shared/components/structural/structural.module';
import { InterfaceModule } from '../../../shared/components/interface/interface.module';
import { NavbarModule } from '../../../shared/components/navigation/navbar/navbar.module';
import { AppFormsModule } from '../../../shared/components/app-forms/app-forms.module';

@NgModule({
  declarations: [GoalsComponent],
  imports: [CommonModule, GoalsRoutingModule, StructuralModule, InterfaceModule, NavbarModule, AppFormsModule],
})
export class GoalsModule {}
