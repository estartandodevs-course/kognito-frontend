import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input()
  routerLink: string = '';
  @Input()
  selected: boolean = true;
  @Input()
  dataIconActive: string = '';
  @Input()
  dataIconInactive: string = '';
  @Input()
  label: string = '';
}
