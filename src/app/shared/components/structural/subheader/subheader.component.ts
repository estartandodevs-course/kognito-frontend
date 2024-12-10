import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-subheader',
  templateUrl: './subheader.component.html',
  styleUrl: './subheader.component.scss',
})
export class SubheaderComponent {
  @Input() title = '';
  @Input() actions: { id: string; icon: string; onClick?: () => void }[] = [];
}
