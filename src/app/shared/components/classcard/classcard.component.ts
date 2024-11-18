import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-classcard',
  templateUrl: './classcard.component.html',
  styleUrl: './classcard.component.scss',
})
export class ClasscardComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
}
