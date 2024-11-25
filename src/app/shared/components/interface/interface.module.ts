import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CheckBoxTaskComponent } from './checkbox-task/checkbox-task.component';
import { NeuroTagsComponent } from './neuro-tags/neuro-tags.component';

@NgModule({
  declarations: [CheckBoxTaskComponent, NeuroTagsComponent],
  exports: [CheckBoxTaskComponent, NeuroTagsComponent],
  imports: [CommonModule, FormsModule],
})
export class InterfaceModule {}
