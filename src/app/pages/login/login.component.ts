import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  currentRole!: string;

  constructor(private _router: Router) {
    const url = this._router.url.split('/');
    this.currentRole = url[url.length - 1];
  }

  createUser(value: object) {
    console.log(value);
  }

  get rolePTBR() {
    return this.currentRole === 'teacher' ? 'professor' : 'aluno';
  }
}
