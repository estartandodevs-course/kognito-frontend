import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { ImageContainerComponent } from './image-container/image-container.component';

@NgModule({
  declarations: [HeaderComponent, SectionComponent, ImageContainerComponent],
  exports: [HeaderComponent, SectionComponent, ImageContainerComponent],
  imports: [CommonModule],
})
export class StructuralModule {}
