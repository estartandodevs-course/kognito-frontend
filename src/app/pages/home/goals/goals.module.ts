import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';

import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { InterfaceModule } from '@components/interface/interface.module';
import { NavbarModule } from '@components/navigation/navbar/navbar.module';
import { StructuralModule } from '@components/structural/structural.module';
import { SidebarModule } from '@components/navigation/sidebar/sidebar.module';

@NgModule({
  declarations: [GoalsComponent],
  imports: [CommonModule, GoalsRoutingModule, StructuralModule, InterfaceModule, NavbarModule, AppFormsModule, SidebarModule],
})
export class GoalsModule {}
