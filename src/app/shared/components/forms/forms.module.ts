import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonComponent } from './button/button.component';
import { InputFieldComponent } from './input-field/input-field.component';
import { WritingDirective } from 'app/shared/directives/writing/writing.directive';

@NgModule({
  declarations: [WritingDirective, ButtonComponent, InputFieldComponent],
  exports: [ButtonComponent, InputFieldComponent],
  imports: [CommonModule],
})
export class FormsModule {}
