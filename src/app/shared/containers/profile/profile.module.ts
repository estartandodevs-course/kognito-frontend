import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { GraphicComponent } from './graphic/graphic.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmblemsComponent } from './emblems/emblems.component';
import { AppFormsModule } from '../../components/app-forms/app-forms.module';
import { StructuralModule } from '../../components/structural/structural.module';
import { InterfaceModule } from '../../components/interface/interface.module';

@NgModule({
  declarations: [ProfileComponent, GraphicComponent, RegistrationComponent, EmblemsComponent],
  exports: [GraphicComponent, RegistrationComponent, EmblemsComponent],
  imports: [CommonModule, AppFormsModule, StructuralModule, InterfaceModule],
})
export class ProfileModuleComponent {}
