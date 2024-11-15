import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NeuroTagsComponent } from './neuro-tags/neuro-tags.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [NeuroTagsComponent],
  exports: [NeuroTagsComponent],
  imports: [CommonModule, FormsModule],
})
export class BadgesModule {}
