import { AfterContentInit, Component, ContentChildren, QueryList } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { InputFieldComponent } from '../input-field/input-field.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss',
})
export class FormComponent implements AfterContentInit {
  @ContentChildren(InputFieldComponent) inputs!: QueryList<InputFieldComponent>;
  dynamicForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.dynamicForm = this.fb.group({});
  }

  ngAfterContentInit(): void {
    this.inputs.forEach((input) => {
      const controlName = input.formControlName;

      if (controlName) {
        // Cria o formulário dinamicamente.
        this.dynamicForm.addControl(controlName, input.control);
      }
    });
  }
}
