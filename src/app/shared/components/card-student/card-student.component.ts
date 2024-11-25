import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-card-student',
  templateUrl: './card-student.component.html',
  styleUrl: './card-student.component.scss',
})
export class CardStudentComponent {
  @Input() tags: string[] = [];
  @Input() initial?: string;
  @Input() iconCode?: string;
  @Input() header: string = '';
  @Input() subheader: string = '';
}
