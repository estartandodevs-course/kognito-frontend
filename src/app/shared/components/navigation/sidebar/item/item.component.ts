import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss',
})
export class ItemComponent {
  @Input()
  routerLink = '';
  @Input()
  selected = true;
  @Input()
  dataIconActive = '';
  @Input()
  dataIconInactive = '';
  @Input()
  label = '';
  @Input()
  onclick!: () => void;

  logoutClicked() {
    if (this.onclick) {
      this.onclick();
    }
  }
}
