import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmblemsComponent } from './emblems/emblems.component';
import { GraphicComponent } from './graphic/graphic.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [EmblemsComponent, GraphicComponent, RegistrationComponent],
  exports: [EmblemsComponent, GraphicComponent, RegistrationComponent],
  imports: [CommonModule],
})
export class ProfileViewsModule {}
