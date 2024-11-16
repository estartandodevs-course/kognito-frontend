import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'filled' | 'outlined' | 'text' = 'filled';
  @Input() showIcon: boolean = false;
  @Input() typeIcon: 'addIcon' | 'backIcon' | 'linkUpIcon' = 'addIcon';
  @Input() label: string = '';
  @Input() disabled: boolean = false;

  @Output() buttonClick = new EventEmitter<void>();

  /**
   * Retorna as classes CSS do botão baseadas no tipo e no estado de desabilitação.
   *
   * @returns {string} As classes CSS do botão.
   */
  getButtonClass(): string {
    let baseClass = `btn ${this.type}`;
    if (this.disabled) {
      baseClass += ' disabled';
    }
    if (this.showIcon && !this.label) {
      baseClass += ' only-icon'; // Adiciona a classe only-icon quando só há ícone
    }
    return baseClass;
  }

  /**
   * Emite o evento de clique se o botão não estiver desabilitado.
   *
   * @returns {void}
   */
  onClick() {
    if (!this.disabled) {
      this.buttonClick.emit(); // Emite o evento de clique
    }
  }

  // Lógica para verificar se o botão tem apenas o ícone
  get isOnlyIcon(): boolean {
    return this.showIcon && !this.label;
  }

  // Método para retornar a cor do ícone
  getIconColor(): string {
    if (this.type === 'outlined' || this.type === 'text') {
      return 'var(--normal)';
    }
    return ''; // Caso contrário, usa o valor padrão da classe
  }

  // Método para retornar a cor da label
  getLabelColor(): string {
    if (this.type === 'outlined' || this.type === 'text') {
      return 'var(--normal)';
    }
    return ''; // Caso contrário, usa o valor padrão da classe
  }
}
