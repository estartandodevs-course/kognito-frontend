import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Task {
  id?: string;
  label: string;
  isChecked: boolean;
}

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit {
  private apiUrl = 'https://kognitoapi.estartandodevs.com.br/swagger/index.html';
  tasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadTasks();
    this.loadCompletedTasks();
  }

  loadTasks() {
    this.http.get<Task[]>(`${this.apiUrl}/api/metas`).subscribe({
      next: (response) => {
        this.tasks = response.filter((task) => !task.isChecked);
      },
      error: (error) => {
        console.error('Erro ao carregar metas:', error);
      },
    });
  }

  loadCompletedTasks() {
    this.http.get<Task[]>(`${this.apiUrl}/api/metas/concluidas-hoje`).subscribe({
      next: (response) => {
        this.completedTasks = response;
      },
      error: (error) => {
        console.error('Erro ao carregar metas concluídas:', error);
      },
    });
  }

  addCheckBox(): void {
    const label = prompt('Digite o nome da nova tarefa:');
    if (label) {
      const newTask = { label, isChecked: false };

      this.http.post<Task>(`${this.apiUrl}/api/metas`, newTask).subscribe({
        next: (response) => {
          this.tasks.push(response);
        },
        error: (error) => {
          console.error('Erro ao criar meta:', error);
        },
      });
    }
  }

  onTaskChecked(index: number, isChecked: boolean): void {
    const task = this.tasks[index];
    if (isChecked && task.id) {
      this.http.put(`${this.apiUrl}/api/metas/${task.id}/concluir`, {}).subscribe({
        next: () => {
          this.tasks.splice(index, 1);
          this.completedTasks.push({ ...task, isChecked: true });
        },
        error: (error) => {
          console.error('Erro ao concluir meta:', error);
        },
      });
    }
  }
}
