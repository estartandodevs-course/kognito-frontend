import { Component } from '@angular/core';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss',
})
export class CreateTaskComponent {
  addTask() {
    console.log('Adicionar nova tarefa');
  }
}
