import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss',
})
export class ProfileComponent {
  selectedButton: string = 'Gráfico';

  onButtonClick(label: string) {
    this.selectedButton = label;
  }
}
