import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { NavbarModule } from '@components/navigation/navbar/navbar.module';
import { StructuralModule } from '@components/structural/structural.module';
import { ProfileModuleComponent } from '@containers/profile/profile.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, StructuralModule, NavbarModule, AppFormsModule, ProfileModuleComponent],
})
export class ProfileModule {}
