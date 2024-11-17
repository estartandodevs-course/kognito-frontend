import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  @Input()
  role!: 'student' | 'teacher';
  path: string = '';

  constructor(location: Location, router: Router) {
    router.events.subscribe(() => {
      this.path = location.path();
    });
  }
}
