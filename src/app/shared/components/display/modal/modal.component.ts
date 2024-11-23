import { Component, Input, OnDestroy, Output, EventEmitter } from '@angular/core';

/**
 * Tipagem para as propriedades dos botões do modal.
 */
interface ButtonProps {
  text: string;
  onClick?: () => void;
}

/**
 * Componente de Modal que exibe um conteúdo com título, parágrafo e botões de ação.
 * O modal pode exibir ações configuráveis para botões principais e secundários.
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
   * Botão principal do modal, contendo texto e ação.
   */
  @Input() buttonPrincipal: ButtonProps = {
    text: 'Enviar',
  };

  /**
   * Botão secundário do modal, contendo texto e ação.
   * Exibido apenas se fornecido pelo usuário.
   */
  @Input() buttonSecondary: ButtonProps | null = null;

  /**
   * Evento emitido quando o botão principal é clicado.
   */
  @Output() principalButtonClicked = new EventEmitter<void>();

  /**
   * Evento emitido quando o botão secundário é clicado.
   */
  @Output() secondaryButtonClicked = new EventEmitter<void>();

  /**
   * Função chamada quando o botão principal é clicado.
   */
  onPrincipalClick(): void {
    if (this.buttonPrincipal.onClick) {
      this.buttonPrincipal.onClick();
    }
    this.principalButtonClicked.emit();
  }

  /**
   * Função chamada quando o botão secundário é clicado.
   */
  onSecondaryClick(): void {
    if (this.buttonSecondary?.onClick) {
      this.buttonSecondary.onClick();
    }
    this.secondaryButtonClicked.emit();
  }

  /**
   * Função chamada quando o componente é destruído.
   * Realiza a ação de fechar o modal.
   */
  ngOnDestroy(): void {
    console.log('Modal fechado');
  }
}
