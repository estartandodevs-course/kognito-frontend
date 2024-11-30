import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OffensiveComponent } from './offensive.component';

@NgModule({
  declarations: [OffensiveComponent],
  exports: [OffensiveComponent],
  imports: [CommonModule],
})
export class OffensiveModule {}
