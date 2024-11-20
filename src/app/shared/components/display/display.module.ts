import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '../forms/forms.module';
import { SubheaderComponent } from './subheader/subheader.component';
import { ClasscardTitleComponent } from './classcard-title/classcard-title.component';

@NgModule({
  declarations: [ModalComponent, SubheaderComponent, ClasscardTitleComponent],
  exports: [ModalComponent, SubheaderComponent, ClasscardTitleComponent],
  imports: [CommonModule, FormsModule],
})
export class DisplayModule {}
