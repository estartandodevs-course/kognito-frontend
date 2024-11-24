import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FormsModule } from './shared/components/forms/forms.module';
import { StructuralModule } from './shared/components/structural/structural.module';
import { StoreModule } from '@ngrx/store';
import { modalReducer } from './core/store/modal/modal.reducer';
import { OpenModalComponent } from './pages/open-modal/open-modal.component';
// import { NavbarModule } from './shared/components/navbar/navbar.module';

@NgModule({
  declarations: [AppComponent, NotFoundComponent, OpenModalComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, StructuralModule, StoreModule.forRoot({ modal: modalReducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
