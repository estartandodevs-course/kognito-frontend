import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { ProfileViewsModule } from '@components/dynamicView/profile-views/profile-views.module';

import { NavbarModule } from '@components/navigation/navbar/navbar.module';
import { StructuralModule } from '@components/structural/structural.module';
import { NavigationModule } from '@components/navigation/navigation.module';
import { AppFormsModule } from '@components/app-forms/app-forms.module';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    ProfileViewsModule,
    StructuralModule,
    NavbarModule,
    NavigationModule,
    AppFormsModule,
  ],
})
export class ProfileModule {}
