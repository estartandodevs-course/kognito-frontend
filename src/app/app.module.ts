import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputTextComponent } from './shared/components/input-text/input-text.component';
import { InviteCardComponent } from './shared/components/invite-card/invite-card.component';

@NgModule({
  declarations: [AppComponent, ButtonComponent, InputTextComponent, InviteCardComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
