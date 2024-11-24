import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) },
  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then((m) => m.WelcomeModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./pages/register/register.module').then((m) => m.RegisterModule) },
  { path: 'invite/:id', loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule) },
  { path: '**', loadChildren: () => import('./pages/not-found/not-found.module').then((m) => m.NotFoundModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
