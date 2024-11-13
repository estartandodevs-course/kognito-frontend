import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() paragraph: string = '';
  @Input() linkToCopy: string = '';

  /**
   * Copia o link gerado para a área de transferência.
   */
  copyLinkToClipboard(): void {
    navigator.clipboard
      .writeText(this.linkToCopy)
      .then(() => {
        console.log('Link copiado para a área de transferência!');
        alert('Link copiado com sucesso!');
      })
      .catch((err) => {
        console.error('Erro ao copiar o link: ', err);
        alert('Erro ao copiar o link.');
      });
  }
}
