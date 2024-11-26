import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckBoxTaskComponent } from './checkbox-task/checkbox-task.component';
import { NeuroTagsComponent } from './neuro-tags/neuro-tags.component';
import { StepsComponent } from './steps/steps.component';

@NgModule({
  declarations: [CheckBoxTaskComponent, NeuroTagsComponent, StepsComponent],
  imports: [CommonModule, FormsModule, StepsComponent],
})
export class InterfaceModule {}
