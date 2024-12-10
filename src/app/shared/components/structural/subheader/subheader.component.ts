import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent {
  @Input() title: string = ''; // Título do subheader
  @Input() codeIcon: string[] = []; // Lista de ícones do iconify

  @Output() iconClick = new EventEmitter<string>(); // Emite o ícone clicado

  /**
   * Emite o evento de clique e redireciona para a URL fornecida.
   */
  onClick(icon: string): void {
    this.iconClick.emit(icon); // Emite o ícone clicado
  }
}
