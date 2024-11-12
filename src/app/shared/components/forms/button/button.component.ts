import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `
    <button [ngClass]="getButtonClass()" [disabled]="disabled" (click)="onClick()">
      <span *ngIf="showIcon" class="icon">+</span>
      <span *ngIf="label">{{ label }}</span>
    </button>
  `,
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() type: 'filled' | 'outlined' | 'text' = 'filled';
  @Input() showIcon: boolean = false;
  @Input() label: string = '';
  @Input() disabled: boolean = false;

  @Output() Click = new EventEmitter<void>();

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
    return baseClass;
  }

  /**
   * Emite o evento de clique se o botão não estiver desabilitado.
   *
   * @returns {void}
   */
  onClick() {
    if (!this.disabled) {
      this.Click.emit(); // Emite o evento de clique
    }
  }
}
