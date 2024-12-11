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
   * Obtém a mensagem como um array de strings válidas.
   *
   * Se a mensagem for um array, filtra os valores para garantir que todos os elementos sejam strings.
   * Caso contrário, encapsula a mensagem em um array (se ela for uma string) e filtra.
   * Se nenhuma mensagem válida for encontrada, retorna uma mensagem de erro padrão.
   *
   * @returns {string[]} Um array contendo apenas as mensagens válidas como strings, ou uma mensagem de erro padrão.
   */
  getMessage(): string[] {
    const allMessages = Array.isArray(this.message) ? this.message : [this.message];
    const validMessages = allMessages.filter((value) => value !== 'false' && value !== 'true');
    if (!validMessages.length) {
      return ['Ocorreu um erro interno na API'];
    }
    return validMessages;
  }
}
