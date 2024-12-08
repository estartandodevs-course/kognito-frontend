import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModalComponent } from './modal/modal.component';
import { AppFormsModule } from '@components/app-forms/app-forms.module';
import { ClasscardTitleComponent } from './classcard-title/classcard-title.component';

@NgModule({
  declarations: [ModalComponent, ClasscardTitleComponent],
  exports: [ModalComponent, ClasscardTitleComponent],
  imports: [CommonModule, AppFormsModule],
})
export class DisplayModule {}
