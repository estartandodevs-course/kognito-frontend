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

  private defaultTasks: Task[] = [
    {
      title: 'Clique aqui e cumpra sua primeira meta!',
      description: 'Meta inicial',
      isChecked: false,
      label: 'Clique aqui e cumpra sua primeira meta!',
    },
    {
      title: 'Que tal uma segunda meta gratuita?',
      description: 'Segunda meta',
      isChecked: false,
      label: 'Que tal uma segunda meta gratuita?',
    },
  ];

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
            if (response.data.length > 0) {
              const pendingTasks = response.data
                .filter((task) => task.isChecked === false)
                .map((task) => ({
                  ...task,
                  label: task.title || '',
                }));

              this.tasks = pendingTasks;
            } else {
              this.tasks = this.defaultTasks;
            }
          } else {
            this.tasks = this.defaultTasks;
          }
        },
        error: (error: Error) => {
          console.error('Erro ao carregar metas:', error);
          this.tasks = this.defaultTasks;
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
            this.tasks.push({
              ...newTask,
              id: response.id,
            });
          },
          error: (error: Error) => {
            console.error('Erro ao criar meta:', error);
          },
        });
    }
  }

  onTaskChecked(index: number, checked: boolean): void {
    const task = this.tasks[index];
    if (task.id) {
      if (checked) {
        this.tasks[index] = {
          ...task,
          isChecked: checked,
        };

        setTimeout(() => {
          this.kognitoRest
            .request({
              method: 'PUT',
              relativeURL: `api/metas/${task.id}/concluir`,
              body: {
                isChecked: 'true',
              },
            })
            .subscribe({
              next: () => {
                this.moveTaskToCompleted(index);
                this.loadTasks();
                this.loadCompletedTasks();
              },
              error: (error: Error) => {
                console.error('Erro ao concluir meta:', error);
                this.tasks[index].isChecked = false;
              },
            });
        }, 1500);
      } else {
        this.tasks[index].isChecked = checked;
      }
    } else {
      this.moveTaskToCompleted(index);
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
