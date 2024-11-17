import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '../../shared/components/forms/forms.module';
import { HeaderDesktopComponent } from './header-desktop/header-desktop.component';

@NgModule({
  declarations: [HeaderComponent, HeaderDesktopComponent],
  exports: [HeaderComponent, HeaderDesktopComponent],
  imports: [CommonModule, FormsModule],
})
export class ComponentsCoreModule {}
