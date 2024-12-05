import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class.component';

const routes: Routes = [
  { path: '', component: ClassComponent },
  { path: 'create_task', loadChildren: () => import('./create-task/create-task.module').then((m) => m.CreateTaskModule) },
  { path: 'invite', loadChildren: () => import('./invite/invite.module').then((m) => m.InviteModule) },
  { path: ':task', loadChildren: () => import('./task/task.module').then((m) => m.TaskModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassRoutingModule {}
