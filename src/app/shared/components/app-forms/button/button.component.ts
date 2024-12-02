import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'filled' | 'outlined' | 'text' = 'filled';
  @Input() codeIcon: string | null = null;
  @Input() label: string = '';
  @Input() disabled: boolean = false;
  @Input() iconSize: number = 16; // Default icon size is 16
  @Input() iconColor: string = '';

  @Output() buttonClick = new EventEmitter<void>();

  /**
   * Retorna as classes CSS do botão com base no tipo e estado.
   *
   * @returns {string} As classes CSS do botão.
   */
  getButtonClass(): string {
    let baseClass = `btn ${this.type}`;
    if (this.disabled) {
      baseClass += ' disabled';
    }
    if (this.isIconOnly) {
      baseClass += ' only-icon';
    }
    return baseClass;
  }

  /**
   * Emite o evento de clique se o botão não estiver desabilitado.
   *
   * @returns {void}
   */
  onClick(): void {
    if (!this.disabled) {
      this.buttonClick.emit();
    }
  }

  /**
   * Verifica se o botão deve ser renderizado como apenas um ícone.
   *
   * @returns {boolean} Verdadeiro se o botão possui apenas o ícone e nenhuma label.
   */
  get isIconOnly(): boolean {
    return this.codeIcon !== null && !this.label;
  }

  /**
   * Retorna o tamanho adequado para o ícone, ajustando se for um botão de ícone somente.
   *
   * @returns {number} O tamanho do ícone.
   */
  getIconSize(): number {
    if (this.isIconOnly) {
      return 24; // Se for só ícone, define o tamanho como 24px
    }
    return this.iconSize; // Caso contrário, usa o valor passado pelo Input
  }

  /**
   * Retorna a cor apropriada para o ícone baseado no tipo do botão.
   *
   * @returns {string} A cor do ícone.
   */
  getIconColor(): string {
    if (this.type === 'outlined' || this.type === 'text') {
      return 'var(--normal)';
    }
    return '';
  }

  /**
   * Retorna a cor apropriada para o texto da label baseado no tipo do botão.
   *
   * @returns {string} A cor da label.
   */
  getLabelColor(): string {
    if (this.type === 'outlined' || this.type === 'text') {
      return 'var(--normal)';
    }
    return '';
  }
}
