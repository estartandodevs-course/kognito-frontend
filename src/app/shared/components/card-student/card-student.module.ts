import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardStudentComponent } from './card-student.component';
import { InterfaceModule } from '../interface/interface.module';

@NgModule({
  declarations: [CardStudentComponent],
  exports: [CardStudentComponent],
  imports: [CommonModule, InterfaceModule],
})
export class CardStudentModule {}
