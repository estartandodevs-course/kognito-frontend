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
  @Input() message = 'Mensagem não definida';
  @Input() buttons?: ModalButtonProps[];

  constructor(private _modalManager: ModalService) {}

  ngOnInit(): void {
    if (!this.buttons?.length) {
      // Cria um botão 'Fechar' padrão no caso de nenhum botão informado.
      this.buttons = [{ text: 'Fechar', onClick: () => this._modalManager.removeModal(this.id) }];
    }
  }
}
