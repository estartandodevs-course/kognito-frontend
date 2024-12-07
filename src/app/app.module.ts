import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from '@store/auth/auth.effects';
import { authReducer } from '@store/auth/auth.reducer';
import { modalReducer } from '@store/modal/modal.reducer';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(
      { auth: authReducer, modal: modalReducer },
      {
        metaReducers: [
          localStorageSync({ keys: [{ auth: ['user', 'token', 'isAuthenticated'] }], rehydrate: true, removeOnUndefined: true }),
        ],
      },
    ),
    EffectsModule.forRoot([AuthEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
