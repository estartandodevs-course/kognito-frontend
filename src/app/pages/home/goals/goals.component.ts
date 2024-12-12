import { Component } from '@angular/core';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent {
  tasks = [
    { label: 'Clique aqui e cumpra sua primeira meta!', isChecked: false },
    { label: 'Que tal uma segunda meta gratuita?', isChecked: false },
  ];

  completedTasks: { label: string; isChecked: boolean }[] = [];

  newTaskLabel: string = ''; // Armazena a nova label temporariamente

  addCheckBox(): void {
    const label = prompt('Digite o nome da nova tarefa:'); // Solicita a label ao usuário
    if (label) {
      this.tasks.push({ label, isChecked: false });
    }
  }

  onTaskChecked(index: number, isChecked: boolean): void {
    if (isChecked) {
      const completedTask = this.tasks[index];
      this.tasks.splice(index, 1);
      this.completedTasks.push(completedTask);
    }
  }
}
