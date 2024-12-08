import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ModalManagerService } from '@services/modal-manager/modal-manager.service';
import { ModalProps } from '@services/modal-manager/modal-manager.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  private _subscription!: Subscription;
  modal!: ModalProps | null;

  constructor(private _modalManager: ModalManagerService) {
    this._subscription = this._modalManager.modal$.subscribe((value) => (this.modal = value));
  }

  ngOnDestroy(): void {
    if (this._subscription) {
      this._subscription.unsubscribe();
    }
  }
}
