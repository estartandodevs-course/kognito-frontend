import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent {
  @Input() title = '';
  @Input() actions: { id: string; icon: string; onClick?: () => void }[] = [];

  @Output() iconClick = new EventEmitter<void>();

  /**
   * Emite o evento quando o ícone é clicado.
   * Se um onClick for passado, ele será executado, senão, apenas o evento é emitido.
   */
  onIconClick(action: { icon: string; id: string; onClick?: () => void }): void {
    console.log('Icon clicked:', action); // Log para verificar se o clique foi detectado
    if (action.onClick) {
      action.onClick();
    }
    this.iconClick.emit(); // Emite o evento de clique
  }

  /**
   * Evento de teclado para garantir acessibilidade
   */
  onKeyDown(event: KeyboardEvent, action: { icon: string; id: string; onClick?: () => void }): void {
    if (event.key === 'Enter' || event.key === ' ') {
      this.onIconClick(action); // Executa o mesmo método de clique
    }
  }
}
