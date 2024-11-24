import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon', // Certifique-se de que este é o nome usado no HTML
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() icon: string = '';
  @Input() title: string = '';
}
