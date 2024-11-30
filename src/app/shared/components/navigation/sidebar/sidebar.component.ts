import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input()
  role!: 'student' | 'teacher';
  path: string = '';

  constructor(location: Location, router: Router) {
    router.events.subscribe(() => {
      this.path = location.path();
    });
  }
}
