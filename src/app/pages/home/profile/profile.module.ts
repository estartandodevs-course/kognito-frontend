import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { StructuralModule } from '../../../shared/components/structural/structural.module';
import { NavbarModule } from '../../../shared/components/navigation/navbar/navbar.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [CommonModule, ProfileRoutingModule, StructuralModule, NavbarModule],
})
export class ProfileModule {}
