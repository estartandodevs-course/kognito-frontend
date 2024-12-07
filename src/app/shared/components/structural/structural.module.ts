import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, SectionComponent, FooterComponent],
  exports: [HeaderComponent, SectionComponent, FooterComponent],
  imports: [CommonModule],
})
export class StructuralModule {}
