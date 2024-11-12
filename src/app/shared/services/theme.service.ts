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
   * - Se `value` for `true`, o tema escuro será ativado e salvo no `localStorage` como `'dark'`.
   * - Se `value` for `false`, o tema claro será ativado e salvo no `localStorage` como `'light'`.
   * - Se `value` for `null`, a configuração do tema será removida do `localStorage`
   * e o tema será ajustado automaticamente conforme a preferência do navegador.
   *
   * Além disso, a classe `theme-dark` será adicionada ou removida do `<body>`
   * para refletir o tema selecionado.
   */
  set themeIsDark(value: boolean | null) {
    // Detecta o tema padrão do navegador ou usa o valor fornecido.
    const isDark = value ?? this._detectUserPrefersDarkTheme();

    this._themeDark.next(isDark);
    document.body.classList.toggle('theme-dark', isDark);

    if (value === null) {
      localStorage.removeItem('themeUser');
    } else {
      localStorage.setItem('themeUser', isDark ? 'dark' : 'light');
    }
  }

  constructor() {
    // Verifica se o usuário possui algum tema salvo.
    this.themeIsDark = this._detectThemeInLocalStorage();
  }
}
