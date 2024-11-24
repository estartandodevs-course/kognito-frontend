import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

/**
 * Guarda de rota que verifica se o usuário está autenticado antes de permitir a navegação.
 *
 * @returns {boolean} Retorna `true` se o usuário estiver autenticado, caso contrário, redireciona para a página de login e retorna `false`.
 */
export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isAuthenticated()) {
    return true;
  }

  router.navigate(['/login'], { queryParams: { returnUrl: router.url } });
  return false;
};
