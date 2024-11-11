import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckBoxTaskComponent } from './shared/components/check-box-task/check-box-task.component';
import { InviteCardComponent } from './shared/components/invite-card/invite-card.component';

@NgModule({
  declarations: [AppComponent, CheckBoxTaskComponent, InviteCardComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
