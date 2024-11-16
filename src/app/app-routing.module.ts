import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//É necessário retirar do comentário o import da Navbar para testá-la
// import { NavbarComponent } from './shared/components/navbar/navbar.component';

const routes: Routes = [{ path: '', loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule) }];

//As rotas abaixo foram comentadas para facilitar o teste da Navbar. Para testar, basta tire do comentário
// const routes: Routes = [
//   { path: '', component: NavbarComponent },
//   { path: 'turma', component: NavbarComponent },
//   { path: 'tarefas', component: NavbarComponent },
//   { path: 'ajustes', component: NavbarComponent },
//   { path: 'metas', component: NavbarComponent },
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
