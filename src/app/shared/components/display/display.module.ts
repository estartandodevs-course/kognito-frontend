import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { FormsModule } from '../forms/forms.module';
import { SubheaderComponent } from './subheader/subheader.component';

@NgModule({
  declarations: [ModalComponent, SubheaderComponent],
  exports: [ModalComponent, SubheaderComponent],
  imports: [CommonModule, FormsModule],
})
export class DisplayModule {}
