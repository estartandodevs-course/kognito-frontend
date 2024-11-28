import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WritingDirective } from 'app/shared/directives/writing/writing.directive';
import { FormComponent } from './form/form.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { ButtonComponent } from './button/button.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WritingDirective, FormComponent, InputFieldComponent, ButtonComponent],
  exports: [FormComponent, InputFieldComponent, ButtonComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class AppFormsModule {}
