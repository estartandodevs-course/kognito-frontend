import { Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss',
})
export class RegistrationComponent {
  students: { header: string; id: number }[] = [];

  onAddStudent() {
    const newStudent = {
      header: 'Laudo',
      id: this.students.length,
    };

    this.students.push(newStudent);
  }
}
