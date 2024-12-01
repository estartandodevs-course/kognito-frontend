import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationUtils {
  constructor(private router: Router) {}

  /**
   * Navega para a página inicial do aplicativo.
   */
  goToHome(): void {
    this.router.navigate(['/']);
  }
}
