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

  ngOnInit(): void {
    this.loadAllTasks();
  }

  private loadAllTasks(): void {
    this.loadPendingTasks();
    this.loadCompletedTasks();
  }

  private loadPendingTasks(): void {
    this.kognitoRest
      .request<{ success: boolean; data: Task[] }>({
        method: 'GET',
        relativeURL: 'api/metas',
      })
      .subscribe({
        next: (response) => {
          if (!response?.data) return;

          this.tasks = response.data.filter((task) => task.isChecked !== true).map(this.mapTaskResponse);
        },
        error: (error: Error) => {
          console.error('Erro ao carregar metas pendentes:', error);
          this.tasks = [];
        },
      });
  }

  private loadCompletedTasks(): void {
    this.kognitoRest
      .request<{ success: boolean; data: Task[] }>({
        method: 'GET',
        relativeURL: 'api/metas/concluidas-hoje',
      })
      .subscribe({
        next: (response) => {
          if (!response?.data) return;

          this.completedTasks = response.data.map(this.mapTaskResponse);
        },
        error: (error: Error) => {
          console.error('Erro ao carregar metas concluídas:', error);
          this.completedTasks = [];
        },
      });
  }

  private mapTaskResponse(task: Task): Task {
    return {
      ...task,
      label: task.title || '',
      isChecked: Boolean(task.isChecked),
    };
  }

  addCheckBox(): void {
    const title = prompt('Digite o nome da nova tarefa:');
    if (!title) return;

    const description = prompt('Digite uma descrição para a tarefa (opcional):') || title;
    const newTask = this.createTask(title, description);

    this.addTaskToList(newTask);
    this.saveTaskToAPI(newTask);
  }

  private createTask(title: string, description: string): Task {
    return {
      title,
      description,
      isChecked: false,
      label: title,
    };
  }

  private addTaskToList(task: Task): void {
    this.tasks = [...this.tasks, task];
  }

  private saveTaskToAPI(task: Task): void {
    this.kognitoRest
      .request<Task>({
        method: 'POST',
        relativeURL: 'api/metas',
        body: {
          title: task.title,
          description: task.description,
          isChecked: 'false',
          userId: '1',
        },
      })
      .subscribe({
        next: (response: Task) => {
          const index = this.tasks.findIndex((t) => t.title === task.title);
          if (index !== -1) {
            this.tasks[index] = { ...task, id: response.id };
          }
        },
        error: (error: Error) => {
          console.error('Erro ao criar meta:', error);
          this.tasks = this.tasks.filter((t) => t !== task);
        },
      });
  }

  onTaskChecked(index: number, checked: boolean): void {
    const task = this.tasks[index];
    if (!task?.id) return;

    this.updateTaskStatus(task, checked, index);
  }

  private updateTaskStatus(task: Task, checked: boolean, index: number): void {
    this.kognitoRest
      .request({
        method: 'PUT',
        relativeURL: `api/metas/${task.id}/concluir`,
        body: {
          isChecked: checked.toString(),
        },
      })
      .subscribe({
        next: () => {
          if (checked) {
            this.moveTaskToCompleted(index);
            this.loadAllTasks(); // Recarrega para garantir sincronização
          }
        },
        error: (error: Error) => {
          console.error('Erro ao atualizar meta:', error);
        },
      });
  }

  private moveTaskToCompleted(index: number): void {
    const [completedTask] = this.tasks.splice(index, 1);
    this.completedTasks = [...this.completedTasks, { ...completedTask, isChecked: true }];
  }
}
