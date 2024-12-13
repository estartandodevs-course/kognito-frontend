import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalsRoutingModule } from './goals-routing.module';
import { GoalsComponent } from './goals.component';

import { StructuralModule } from '../../../shared/components/structural/structural.module';
import { InterfaceModule } from '../../../shared/components/interface/interface.module';
import { NavbarModule } from '../../../shared/components/navigation/navbar/navbar.module';
import { AppFormsModule } from '../../../shared/components/app-forms/app-forms.module';
import { SidebarModule } from '../../../shared/components/navigation/sidebar/sidebar.module';

import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { InterfaceModule } from '@components/interface/interface.module';
import { NavbarModule } from '@components/navigation/navbar/navbar.module';
import { StructuralModule } from '@components/structural/structural.module';


@NgModule({
  declarations: [GoalsComponent],
  imports: [CommonModule, GoalsRoutingModule, StructuralModule, InterfaceModule, NavbarModule, AppFormsModule, SidebarModule],
})
export class GoalsModule {}
