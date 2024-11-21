import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrl: './navbar-item.component.scss',
})
export class NavbarItemComponent {
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
