import { AbstractControl, ValidatorFn } from '@angular/forms';

export type ValidatorProp = (control: AbstractControl) => boolean;
export interface CustomValidationsProps {
  validatorName: string;
  condiction: ValidatorProp | ValidatorFn;
  messageError: string;
}
