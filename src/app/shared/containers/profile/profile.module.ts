import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { GraphicComponent } from './graphic/graphic.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmblemsComponent } from './emblems/emblems.component';

@NgModule({
  declarations: [ProfileComponent, GraphicComponent, RegistrationComponent, EmblemsComponent],
  imports: [CommonModule],
})
export class ProfileModule {}
