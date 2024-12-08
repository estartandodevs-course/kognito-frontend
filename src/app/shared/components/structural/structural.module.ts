import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { SubheaderComponent } from './subheader/subheader.component';

@NgModule({
  declarations: [HeaderComponent, SectionComponent, SubheaderComponent],
  exports: [HeaderComponent, SectionComponent, SubheaderComponent],
  imports: [CommonModule],
})
export class StructuralModule {}
