import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { modalReducer } from '@store/modal/modal.reducer';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, StoreModule.forRoot({ modal: modalReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
