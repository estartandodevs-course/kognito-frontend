import { Component, Input, OnInit } from '@angular/core';

import { ModalService } from '@services/modal/modal.service';
import { ModalButtonProps } from './message-modal.types';

@Component({
  selector: 'app-message-modal',
  templateUrl: './message-modal.component.html',
  styleUrl: './message-modal.component.scss',
})
export class MessageModalComponent implements OnInit {
  @Input() id!: string;
  @Input() title = 'Título não definido';
  @Input() message: string | string[] = 'Mensagem não definida';
  @Input() buttons?: ModalButtonProps[];

  constructor(private _modalService: ModalService) {}

  ngOnInit(): void {
    if (!this.buttons?.length) {
      // Cria um botão 'Fechar' padrão no caso de nenhum botão informado.
      this.buttons = [{ text: 'Fechar', onClick: () => this._modalService.removeModal(this.id) }];
    }
  }

  /**
   * Obtém a mensagem como um array de strings.
   *
   * Se a mensagem for um array, ela será retornada como está.
   * Caso contrário, a mensagem será encapsulada em um array.
   *
   * @returns {string[]} A mensagem como um array de strings.
   */
  getMessage(): string[] {
    return Array.isArray(this.message) ? this.message : [this.message];
  }
}
