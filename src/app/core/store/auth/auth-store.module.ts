import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { authReducer } from './reducers/auth.reducers';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from './effects/auth.effects'; // Implementar Effects para o Auth

@NgModule({
  imports: [CommonModule, StoreModule.forFeature('auth', authReducer), EffectsModule.forFeature([AuthEffects])],
})
export class AuthStoreModule {}
