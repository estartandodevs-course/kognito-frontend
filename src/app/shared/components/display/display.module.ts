import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { ClasscardTitleComponent } from './classcard-title/classcard-title.component';
import { MessageModalComponent } from './message-modal/message-modal.component';
import { ModalManagerComponent } from './modal-manager/modal-manager.component';

@NgModule({
  declarations: [ClasscardTitleComponent, MessageModalComponent, ModalManagerComponent],
  exports: [ClasscardTitleComponent, ModalManagerComponent],
  imports: [CommonModule, AppFormsModule],
})
export class DisplayModule {}
