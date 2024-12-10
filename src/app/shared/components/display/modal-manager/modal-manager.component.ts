import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ModalService } from '@services/modal/modal.service';
import { ModalProps } from '@services/modal/modal.types';
import { PropsModalProps } from '@services/modal/modal.types';

@Component({
  selector: 'app-modal-manager',
  templateUrl: './modal-manager.component.html',
  styleUrl: './modal-manager.component.scss',
})
export class ModalManagerComponent implements OnDestroy {
  private _subcription!: Subscription;
  modal!: ModalProps | null;

  constructor(private _modalService: ModalService) {
    this._subcription = this._modalService.modal$.subscribe((value) => (this.modal = value));
  }

  /**
   * Obtém as propriedades do modal.
   *
   * Se o modal estiver definido, retorna as propriedades associadas ao modal,
   * incluindo o `id`. Caso contrário, retorna um objeto vazio.
   *
   * @returns {PropsModalProps} As propriedades do modal, incluindo o ID, ou um objeto vazio.
   */
  getProps(): PropsModalProps {
    if (this.modal) {
      return { ...this.modal?.props, id: this.modal.id };
    }
    return {};
  }

  ngOnDestroy(): void {
    if (this._subcription) {
      this._subcription.unsubscribe();
    }
  }
}
