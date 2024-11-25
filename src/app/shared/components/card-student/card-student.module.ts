import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardStudentComponent } from './card-student.component';
import { BadgesModule } from '../badges/badges.module';

@NgModule({
  declarations: [CardStudentComponent],
  exports: [CardStudentComponent],
  imports: [CommonModule, BadgesModule],
})
export class CardStudentModule {}
