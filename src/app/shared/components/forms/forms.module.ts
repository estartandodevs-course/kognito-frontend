import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { StepsComponent } from './steps/steps.component';

@NgModule({
  declarations: [ButtonComponent, StepsComponent],
  exports: [ButtonComponent, StepsComponent],
  imports: [CommonModule],
})
export class FormsModule {}
