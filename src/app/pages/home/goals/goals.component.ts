import { Component, OnInit } from '@angular/core';
import { KognitoRestService } from '@services/kognito-rest/kognito-rest.service';

interface Task {
  id?: number;
  title: string;
  description: string;
  isChecked: boolean;
  label: string;
}

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit {
  tasks: Task[] = [];
  completedTasks: Task[] = [];

  constructor(private kognitoRest: KognitoRestService) {}

  ngOnInit() {
    this.loadTasks();
    this.loadCompletedTasks();
  }

  loadTasks() {
    this.kognitoRest
      .request<{ success: boolean; data: Task[] }>({
        method: 'GET',
        relativeURL: 'api/metas',
      })
      .subscribe({
        next: (response) => {
          if (response?.data && Array.isArray(response.data)) {
            const pendingTasks = response.data
              .filter((task) => task.isChecked === false)
              .map((task) => ({
                ...task,
                label: task.title || '',
                isChecked: false,
              }));

            this.tasks = pendingTasks;
          }
        },
        error: (error: Error) => {
          console.error('Erro ao carregar metas:', error);
          this.tasks = [];
        },
      });
  }

  loadCompletedTasks() {
    this.kognitoRest
      .request<{ success: boolean; data: Task[] }>({
        method: 'GET',
        relativeURL: 'api/metas/concluidas-hoje',
      })
      .subscribe({
        next: (response) => {
          if (response?.data && Array.isArray(response.data)) {
            this.completedTasks = response.data.map((task) => ({
              ...task,
              label: task.title || '',
              isChecked: true,
            }));
          }
        },
        error: (error: Error) => {
          console.error('Erro ao carregar metas concluídas:', error);
          this.completedTasks = [];
        },
      });
  }

  addCheckBox(): void {
    const title = prompt('Digite o nome da nova tarefa:');
    if (title) {
      const description = prompt('Digite uma descrição para a tarefa (opcional):') || title;

      const newTask: Task = {
        title,
        description,
        isChecked: false,
        label: title,
      };

      this.tasks.push(newTask);

      this.kognitoRest
        .request<Task>({
          method: 'POST',
          relativeURL: 'api/metas',
          body: {
            title,
            description,
            isChecked: 'false',
            userId: '1',
          },
        })
        .subscribe({
          next: (response: Task) => {
            const index = this.tasks.indexOf(newTask);
            if (index !== -1) {
              this.tasks[index] = {
                ...newTask,
                id: response.id,
              };
            }
          },
          error: (error: Error) => {
            console.error('Erro ao criar meta:', error);
            this.tasks = this.tasks.filter((t) => t !== newTask);
          },
        });
    }
  }

  onTaskChecked(index: number, checked: boolean): void {
    const task = this.tasks[index];
    if (checked) {
      const completedTask = this.tasks[index];
      this.moveTaskToCompleted(index);

      if (task.id) {
        this.kognitoRest
          .request({
            method: 'PUT',
            relativeURL: `api/metas/${task.id}/concluir`,
            body: {
              isChecked: 'true',
            },
          })
          .subscribe({
            error: (error: Error) => {
              console.error('Erro ao concluir meta:', error);
              this.completedTasks = this.completedTasks.filter((t) => t !== completedTask);
              this.tasks.splice(index, 0, completedTask);
            },
          });
      }
    }
  }

  private moveTaskToCompleted(index: number): void {
    const completedTask = this.tasks.splice(index, 1)[0];
    this.completedTasks.push({
      ...completedTask,
      isChecked: true,
      label: completedTask.title,
    });
  }
}
