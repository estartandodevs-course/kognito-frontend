import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';

import { FooterComponent } from './footer/footer.component';
import { SubheaderComponent } from './subheader/subheader.component';

@NgModule({
  declarations: [HeaderComponent, SectionComponent, FooterComponent, SubheaderComponent],
  exports: [HeaderComponent, SectionComponent, FooterComponent, SubheaderComponent],
  imports: [CommonModule],
})
export class StructuralModule {}
