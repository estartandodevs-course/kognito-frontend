import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Icon {
  src: string;
  isIconOnly?: boolean;
}

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrls: ['./subheader.component.scss'],
})
export class SubheaderComponent {
  @Input() subtitle: string = '';
  @Input() codeIcons: Icon[] = []; // Valor padrão é uma array vazia
  @Input() disabled: boolean = false;

  @Output() iconClick = new EventEmitter<number>(); // Emite o índice do ícone clicado

  get hasIcons(): boolean {
    return this.codeIcons.length > 0;
  }

  onClick(index: number): void {
    if (!this.disabled) {
      this.iconClick.emit(index); // Emite o índice do ícone clicado
    }
  }
}
