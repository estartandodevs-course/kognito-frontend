import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';

@NgModule({
  declarations: [HeaderComponent, SectionComponent],
  exports: [SectionComponent],
  imports: [CommonModule],
})
export class StructuralModule {}
