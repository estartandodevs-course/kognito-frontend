import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'login_teacher',
    loadChildren: () => import('../login/teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'login_student',
    loadChildren: () => import('../login/student/student.module').then((m) => m.StudentModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
