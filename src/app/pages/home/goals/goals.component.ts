import { Component, OnDestroy } from '@angular/core';
import { map, Subscription } from 'rxjs';

import { KognitoRestService } from '@services/kognito-rest/kognito-rest.service';
import { CreateTaskSuccessProps, GetTasksProps } from '@mapping/goals.types';
import { TaskProps } from './goals.types';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnDestroy {
  private _subscription: Subscription[] = [];
  completedTasks: TaskProps[] = [];
  pendingTasks: TaskProps[] = [];
  isLoading = true;

  constructor(private _kognitoRest: KognitoRestService) {
    this.loadPendingTasks();
    this.loadCompletedTasks();
  }

  /**
   * Carrega as tarefas do servidor e as armazena localmente.
   *
   * Envia uma requisição HTTP GET para buscar as tarefas disponíveis.
   * Após receber a resposta, atribui os dados recebidos à propriedade `allTasks`.
   *
   * @returns {void}
   */
  loadPendingTasks(): void {
    this.isLoading = true;

    this._subscription.push(
      this._kognitoRest
        .request<GetTasksProps>({
          method: 'GET',
          relativeURL: 'api/metas',
        })
        .pipe(map((value) => value.data.filter((task) => !task.completed)))
        .subscribe((value) => {
          this.pendingTasks = value;
          this.isLoading = false;
        }),
    );
  }

  loadCompletedTasks(): void {
    this._subscription.push(
      this._kognitoRest
        .request<GetTasksProps>({
          method: 'GET',
          relativeURL: 'api/metas/concluidas-hoje',
        })
        .subscribe((value) => {
          this.completedTasks = value.data;
        }),
    );
  }

  /**
   * Cria uma nova tarefa.
   *
   * Solicita ao usuário que forneça um título para a nova tarefa e, opcionalmente, uma descrição.
   * Envia uma requisição HTTP POST para criar a tarefa na API.
   * Após a criação bem-sucedida, exibe um modal de sucesso e recarrega a lista de tarefas.
   *
   * @returns {void}
   */
  createTask(): void {
    const title = prompt('Digite o nome da nova tarefa:');
    if (title) {
      const description = prompt('Digite uma descrição para a tarefa (opcional):') || title;

      this._subscription.push(
        this._kognitoRest
          .request<CreateTaskSuccessProps>({
            method: 'POST',
            relativeURL: 'api/metas',
            body: {
              title,
              description,
            },
          })
          .subscribe(() => {
            this.loadCompletedTasks();
            this.loadPendingTasks();
          }),
      );
    }
  }

  /**
   * Marca uma tarefa como concluída com base em seu ID.
   *
   * Procura a tarefa no array `allTasks` pelo seu ID e verifica se ela não está marcada como concluída.
   * Se não estiver, envia uma requisição HTTP PUT para atualizar o estado da tarefa na API.
   * Em seguida, altera o estado `completed` da tarefa para `true` localmente.
   *
   * @param {string} id - O ID da tarefa a ser marcada como concluída.
   * @returns {void}
   */
  completeTaskById(id: string): void {
    const targetTaskIndex = this.pendingTasks.findIndex((task) => task.id === id);
    if (targetTaskIndex !== -1) {
      const task = this.pendingTasks[targetTaskIndex];

      if (!task.completed) {
        // Só envia a requisição se a tarefa não tiver marcada como concluída.
        this._subscription.push(
          this._kognitoRest.request({ relativeURL: `api/metas/${task.id}/concluir`, method: 'PUT' }).subscribe(),
        );
      }
      this.pendingTasks.splice(targetTaskIndex, 1);
      this.completedTasks.push(task);
      task.completed = true;
    }
  }

  ngOnDestroy(): void {
    this._subscription.forEach((sub) => sub.unsubscribe());
  }
}
