import { Component, Input } from '@angular/core';
import { ModalButtonProps } from './modal.types';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() id!: string;
  @Input() title = 'Título não informado';
  @Input() defaltButtonText = 'Fechar';
  @Input() extraButton?: ModalButtonProps;
  @Input() message?: string;
}
