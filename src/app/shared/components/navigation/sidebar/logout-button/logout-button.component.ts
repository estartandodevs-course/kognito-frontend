import { Component } from '@angular/core';

@Component({
  selector: 'app-logout-button',
  templateUrl: './logout-button.component.html',
  styleUrl: './logout-button.component.scss',
})
export class LogoutButtonComponent {
  clickAction() {
    //Quando for implementado o login, é necessário fazer a chamada de serviço de logout aqui
  }
}
