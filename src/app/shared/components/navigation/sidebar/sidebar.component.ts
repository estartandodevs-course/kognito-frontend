import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  @Input()
  role!: 'student' | 'teacher';
  path = '';

  constructor(router: Router) {
    this.path = router.url;
  }
}
