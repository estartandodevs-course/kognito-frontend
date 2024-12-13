import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrl: './graphic.component.scss',
})
export class GraphicComponent {
  percentage: number = 0;
  time: string = '0min';
}
