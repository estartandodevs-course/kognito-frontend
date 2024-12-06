import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { CardComponent } from './card.component';

@NgModule({
  declarations: [CardComponent, IconComponent],
  imports: [CommonModule],
  exports: [CardComponent, IconComponent],
})
export class CardModule {}
