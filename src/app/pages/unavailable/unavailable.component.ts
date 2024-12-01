import { Component, OnInit } from '@angular/core';
import { NavigationUtils } from 'app/core/utils/navigation.utils';

@Component({
  selector: 'app-unavailable',
  templateUrl: './unavailable.component.html',
  styleUrl: './unavailable.component.scss',
})
export class UnavailableComponent implements OnInit {
  constructor(private navigationUtils: NavigationUtils) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  /**
   * Redireciona o usuário para a página inicial da aplicação.
   *
   * @returns void
   */
  navigateHome(): void {
    this.navigationUtils.goToHome();
  }
}
