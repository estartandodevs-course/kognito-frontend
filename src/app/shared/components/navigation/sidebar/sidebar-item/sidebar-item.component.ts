import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
})
export class SidebarItemComponent {
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
