import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'goals',
    loadChildren: () => import('./goals/goals.module').then((m) => m.GoalsModule),
  },
  { path: 'profile', loadChildren: () => import('./profile/profile.module').then((m) => m.ProfileModule) },
  {
    path: 'create_class',
    loadChildren: () => import('./create-class/create-class.module').then((m) => m.CreateClassModule),
  },
  {
    path: ':class',
    loadChildren: () => import('./class/class.module').then((m) => m.ClassModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
