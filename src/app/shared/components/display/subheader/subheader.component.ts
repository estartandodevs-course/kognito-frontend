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
  @Input() codeIcon: Icon[] = []; // Valor padrão é uma array vazia
  @Input() disabled: boolean = false;
  @Input() iconColor: string = 'currentColor'; // Cor padrão

  @Output() iconClick = new EventEmitter<number>(); // Emite o índice do ícone clicado

  get hasIcons(): boolean {
    return this.codeIcon.length > 0;
  }

  onClick(): void {
    if (!this.disabled) {
      this.iconClick.emit();
    }
  }
}
