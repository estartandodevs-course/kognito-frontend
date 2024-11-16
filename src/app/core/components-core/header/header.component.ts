import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';

/**
 * Componente de Header da aplicação.
 * Exibe o título da página e um botão de voltar para a página anterior.
 *
 * @component
 */
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  /**
   * Título a ser exibido no Header.
   * Este título pode ser definido pelo componente pai através da propriedade `@Input()`.
   * O valor padrão é 'Título do Header'.
   *
   * @type {string}
   * @default 'Título do Header'
   */
  @Input() title: string = 'Título do Header';

  /**
   * Construtor do componente Header.
   * Injeta o serviço `Location` para permitir navegação de volta.
   *
   * @param {Location} location - Serviço usado para navegar na história do navegador.
   */
  constructor(private location: Location) {}

  /**
   * Método para voltar à página anterior.
   * Esse método é invocado quando o usuário clica no botão de voltar.
   * Ele chama o método `back()` do serviço `Location` para voltar na navegação anterior do navegador.
   *
   * @returns {void}
   */
  goBack(): void {
    this.location.back();
    console.log('Botão Clicado');
  }
}
