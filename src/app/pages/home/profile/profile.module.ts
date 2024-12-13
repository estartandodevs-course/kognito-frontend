import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { StructuralModule } from '../../../shared/components/structural/structural.module';
import { NavbarModule } from '../../../shared/components/navigation/navbar/navbar.module';
import { AppFormsModule } from '../../../shared/components/app-forms/app-forms.module';
import { SidebarModule } from '../../../shared/components/navigation/sidebar/sidebar.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, StructuralModule, NavbarModule, AppFormsModule, SidebarModule],
})
export class ProfileModule {}
