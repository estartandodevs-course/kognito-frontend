import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '../../shared/components/forms/forms.module';
import { DesktopHeaderComponent } from './desktop-header/desktop-header.component';

@NgModule({
  declarations: [HeaderComponent, DesktopHeaderComponent],
  exports: [HeaderComponent, DesktopHeaderComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsCoreModule {}
