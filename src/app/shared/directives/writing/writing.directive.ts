import { Directive, HostListener, Input } from '@angular/core';
import { ElementRef } from '@angular/core';

import { DontWriteProps, CapitalizeWordProps, SetFormatProps } from './writing.types';
import { regexRestrictMap } from './writing.variables';
import { formatCapitalize } from './writing.utils';

@Directive({
  selector: 'input[appWriting]',
})
export class WritingDirective {
  @Input() capitalize: CapitalizeWordProps = false;
  @Input() dontWrite?: DontWriteProps;
  @Input() setFormat?: SetFormatProps;

  constructor(private _element: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange() {
    const inputElement = this._element.nativeElement as HTMLInputElement;

    // Obtem o valor do input e remove espaços duplos ou no começo do texto.
    let inputValue = inputElement.value.trimStart().replace('  ', ' ');

    if (this.dontWrite) {
      // Garante que `dontWrite` sempre seja uma lista.
      this.dontWrite = Array.isArray(this.dontWrite) ? this.dontWrite : [this.dontWrite];

      this.dontWrite.forEach((regex) => {
        inputValue = inputValue.replace(regexRestrictMap[regex], '');
      });
    }

    if (this.capitalize) {
      const typeUpper = typeof this.capitalize === 'boolean' ? 'first' : 'all';
      inputValue = formatCapitalize(inputValue, typeUpper);
    }

    // Aplica as alterações.
    inputElement.value = inputValue;
  }
}
