import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-classcard-title',
  templateUrl: './classcard-title.component.html',
  styleUrl: './classcard-title.component.scss',
})
export class ClasscardTitleComponent {
  @Input() schoolClass: string = 'Turma';
  @Input() subject: string = 'Matéria';
}
