import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _themeDark = new BehaviorSubject(false);

  /**
   * Obtém a preferência de tema do usuário salva no `localStorage`.
   * @private
   * @returns {boolean | null} `true` se o usuário preferir o tema dark,
   * `false` se preferir o tema light, ou `null` se nenhuma preferência estiver salva.
   */
  private _detectThemeInLocalStorage(): boolean | null {
    const themeUser = localStorage.getItem('themeUser');
    if (themeUser) {
      return themeUser === 'dark';
    }
    return null;
  }

  /**
   * Verifica se o usuário prefere o tema dark com base nas configurações do navegador.
   * @private
   * @returns {boolean} `true` se o usuário tiver preferência pelo tema dark, `false` caso contrário.
   */
  private _detectUserPrefersDarkTheme(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /**
   * Retorna um Observable que emite o estado atual do tema (light ou dark).
   * @returns {Observable<boolean>} Um Observable que emite `true` se o tema for dark, e `false` caso contrário.
   */
  get themeIsDark$(): Observable<boolean> {
    return this._themeDark.asObservable();
  }

  /**
   * Define o tema da aplicação de acordo com a preferência do usuário.
   * @param {boolean | null} value - `true` para ativar o tema dark,
   * `false` para ativar o tema light, ou `null` para aplicar o tema padrão
   * baseado nas configurações do navegador.
   *
   * - Se `value` for `true`, o tema escuro será ativado e salvo no `localStorage`.
   * - Se `value` for `false`, o tema claro será ativado e salvo no `localStorage`.
   * - Se `value` for `null`, a configuração do tema será removida do `localStorage`
   * e o tema será ajustado conforme a preferência do navegador.
   *
   * Além disso, a classe `theme-dark` será adicionada ou removida do `<body>`
   * para refletir o tema selecionado.
   */
  set themeIsDark(value: boolean | null) {
    if (value === null) {
      // Remove o save do tema e aplica o padrão do navegador.
      localStorage.removeItem('themeUser');
      this._themeDark.next(this._detectUserPrefersDarkTheme());
    } else {
      this._themeDark.next(value);
      localStorage.setItem('themeUser', value ? 'dark' : 'light');

      const body = document.body;
      body.classList.toggle('theme-dark', value);
    }
  }

  constructor() {
    // Verifica se o usuário possui algum tema salvo, caso contrário, usa sua preferência do navegador.
    const isThemeDark = this._detectThemeInLocalStorage() ?? this._detectUserPrefersDarkTheme();
    this.themeIsDark = isThemeDark;
  }
}
