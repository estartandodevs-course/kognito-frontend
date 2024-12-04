import { Component } from '@angular/core';
import { ModalService } from '@services/modal/modal.service';

@Component({
  selector: 'app-open-modal',
  template: ` <button (click)="openExampleModal()">Open Example Modal</button> `,
})
export class OpenModalComponent {
  constructor(private modalService: ModalService) {}

  /**
   * Abre o modal com ID 'example' quando o botão é clicado.
   *
   * Este método invoca o serviço ModalService para abrir o modal identificado como 'example'.
   *
   * @returns {void} - Não retorna nada, apenas executa a ação de abrir o modal.
   */
  openExampleModal(): void {
    this.modalService.open('example');
  }
}
