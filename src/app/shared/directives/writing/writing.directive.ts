import { Directive, HostListener, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { NgControl } from '@angular/forms';

import { DontWriteProps, CapitalizeWordProps, SetFormatProps } from './writing.types';
import { formatCapitalize, formatCPF, formatGrade } from './writing.utils';
import { regexRestrictMap } from './writing.variables';

@Directive({
  selector: 'input[appWriting], textarea[appWriting]',
})
export class WritingDirective {
  @Input() capitalize: CapitalizeWordProps = false;
  @Input() dontWrite?: DontWriteProps;
  @Input() setFormat?: SetFormatProps;

  constructor(
    private _element: ElementRef,
    private _control: NgControl,
  ) {}

  @HostListener('input', ['$event'])
  onInputChange() {
    const inputElement = this._element.nativeElement as HTMLInputElement | HTMLTextAreaElement;

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

    if (this.setFormat === 'grade') {
      inputValue = formatGrade(inputValue);
    } else if (this.setFormat === 'cpf') {
      inputValue = formatCPF(inputValue);
    }

    // Aplica as alterações no input e no formulário.
    inputElement.value = inputValue;
    this._control.control?.setValue(inputValue);
  }
}
