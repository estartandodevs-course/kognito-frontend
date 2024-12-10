import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

const routes: Routes = [
  { path: '', component: RegisterComponent },
  {
    path: 'register_teacher',
    loadChildren: () => import('../register/teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'register_teacher',
    loadChildren: () => import('../register/teacher/teacher.module').then((m) => m.TeacherModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
