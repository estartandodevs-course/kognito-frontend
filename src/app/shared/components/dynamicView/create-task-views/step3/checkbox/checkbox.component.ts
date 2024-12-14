import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input() id: string = '';
  @Input() label: string = '';
  @Input() checked: boolean = false;

  @Output() valueChange = new EventEmitter<boolean>();

  onCheckboxChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.valueChange.emit(input.checked);
  }
}
