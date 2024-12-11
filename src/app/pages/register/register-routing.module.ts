import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'student',
    loadChildren: () => import('../register/student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'teacher',
    loadChildren: () => import('../register/teacher/teacher.module').then((m) => m.TeacherModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {}
