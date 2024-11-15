import { Component, Input, OnDestroy } from '@angular/core';

/**
 * Componente de Modal que exibe um conteúdo com título, parágrafo e botões de ação.
 * O modal pode exibir ações de copiar, enviar e cancelar.
 */
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnDestroy {
  /**
   * Título do modal.
   * @default ''
   */
  @Input() title: string = '';

  /**
   * Parágrafo do modal.
   * @default ''
   */
  @Input() paragraph: string = '';

  /**
   * Texto para o botão de copiar link.
   * @default 'Copiar Link'
   */
  @Input() copyButtonText: string = 'Copiar Link';

  /**
   * Texto para o botão de enviar.
   * @default 'Enviar'
   */
  @Input() sendButtonText: string = 'Enviar';

  /**
   * Texto para o botão de cancelar.
   * @default 'Cancelar'
   */
  @Input() closeButtonText: string = 'Cancelar';

  /**
   * Função acionada quando o botão de copiar é clicado.
   * Exibe uma mensagem de sucesso (simula a cópia para a área de transferência).
   */
  copyData(): void {
    alert('Copiado para a área de transferência!');
  }

  /**
   * Função acionada quando o botão de enviar é clicado.
   * Exibe uma mensagem de sucesso (simula o envio dos dados).
   */
  sendData(): void {
    alert('Dados enviados com sucesso!');
  }

  /**
   * Função acionada quando o botão de cancelar é clicado.
   * Fecha o modal e exibe uma mensagem no console.
   */
  cancelAction(): void {
    console.log('Modal fechado');
  }

  /**
   * Função chamada quando o componente é destruído.
   * Realiza a ação de fechar o modal.
   */
  ngOnDestroy(): void {
    // Fechar o modal quando destruído
    this.cancelAction();
  }
}
