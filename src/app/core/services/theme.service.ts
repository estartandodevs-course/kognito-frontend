import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private _themeDark = new BehaviorSubject(false);

  /**
   * Obtém a preferência de tema do usuário salva no `localStorage`.
   * Se o tema não estiver salvo, retorna `null`.
   *
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
   *
   * O método utiliza a media query `prefers-color-scheme` para determinar a preferência
   * do usuário. Caso o navegador não tenha uma preferência configurada, o método
   * retornará `false` por padrão.
   *
   * @private
   * @returns {boolean} `true` se o usuário tiver preferência pelo tema dark, `false` caso contrário.
   */
  private _detectUserPrefersDarkTheme(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  /**
   * Retorna um Observable que emite o estado atual do tema (light ou dark).
   *
   * Esse Observable pode ser utilizado para observar mudanças no tema da aplicação.
   * Quando o tema for alterado, o Observable emitirá o novo estado (`true` para tema dark e `false` para tema light).
   *
   * @returns {Observable<boolean>} Um Observable que emite `true` se o tema for dark, e `false` caso contrário.
   */
  get themeIsDark$(): Observable<boolean> {
    return this._themeDark.asObservable();
  }

  /**
   * Define o tema da aplicação de acordo com a preferência do usuário.
   *
   * Este método altera o tema da aplicação com base no valor fornecido e realiza as seguintes ações:
   * - Se `value` for `true`, ativa o tema dark e o salva no `localStorage` como `'dark'`.
   * - Se `value` for `false`, ativa o tema light e o salva no `localStorage` como `'light'`.
   * - Se `value` for `null`, remove a configuração de tema do `localStorage` e ajusta o tema automaticamente conforme a preferência do navegador.
   *
   * Além disso, o tema será refletido na aplicação através da classe `theme-dark` no `<body>`.
   *
   * @param {boolean | null} value - O valor para definir o tema:
   *  - `true` para ativar o tema dark,
   *  - `false` para ativar o tema light,
   *  - `null` para aplicar o tema conforme a configuração do navegador.
   */
  set themeIsDark(value: boolean | null) {
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
    this.themeIsDark = this._detectThemeInLocalStorage();
  }
}
