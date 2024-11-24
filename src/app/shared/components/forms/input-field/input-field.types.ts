import { AbstractControl, ValidatorFn } from '@angular/forms';

export type ValidatorProp = (control: AbstractControl) => boolean;
export interface CustomValidations {
  [validatorName: string]: { condiction: ValidatorProp | ValidatorFn; messageError: string };
}
