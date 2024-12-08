import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { localStorageSync } from 'ngrx-store-localstorage';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { modalReducer } from './core/store/modal/modal.reducer';
import { authReducer } from '@store/auth/auth.reducer';
import { AuthEffects } from '@store/auth/auth.effects';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
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
