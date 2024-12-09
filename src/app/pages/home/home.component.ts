import { Component } from '@angular/core';
import { ModalService } from '@services/modal/modal.service';

import { MessageModalComponent } from '@components/display/message-modal/message-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  role: 'student' | 'teacher' = 'teacher';

  constructor(private _modalManager: ModalService) {}

  teste() {
    this._modalManager.addModal({
      id: 'teste',
      component: MessageModalComponent,
      props: { title: 'Novo título', message: 'Essa é a mensagem' },
    });
  }
}
