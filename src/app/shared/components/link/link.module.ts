import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InviteCardComponent } from './invite-card/invite-card.component';

@NgModule({
  declarations: [InviteCardComponent],
  exports: [InviteCardComponent],
  imports: [CommonModule],
})
export class LinkModule {}
