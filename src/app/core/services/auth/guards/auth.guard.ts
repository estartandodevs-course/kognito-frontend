import { inject } from '@angular/core';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';

/**
 * Guarda de rota responsável por verificar a autenticação do usuário.
 *
 * Este guard assegura que o usuário esteja autenticado antes de permitir o acesso à rota. Caso o usuário
 * não esteja autenticado, ele será redirecionado para a página de login.
 *
 * @returns {boolean | UrlTree} Retorna `true` se o usuário estiver autenticado, permitindo o acesso à rota.
 * Caso contrário, retorna um `UrlTree` que redireciona o usuário para a página de login. O redirecionamento
 * inclui a URL de retorno (queryParam `returnUrl`) para que o usuário possa ser redirecionado de volta
 * à página que ele tentou acessar após a autenticação bem-sucedida.
 *
 * @example
 * // Exemplo de uso no roteamento
 * const routes: Routes = [
 *   {
 *     path: 'dashboard',
 *     canActivate: [authGuard],
 *     component: DashboardComponent,
 *   }
 * ];
 */
export const authGuard = (): boolean | UrlTree => {
  const authService = inject<AuthService>(AuthService);
  const router = inject<Router>(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  return router.createUrlTree(['/login'], { queryParams: { returnUrl: router.url } });
};
