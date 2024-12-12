import { Component, OnInit } from '@angular/core';
import { KognitoRestService } from '@services/kognito-rest/kognito-rest.service';

/**
 * Interface que representa uma tarefa/meta
 * @interface Task
 * @property {number} [id] - ID opcional da tarefa no banco de dados
 * @property {string} title - Título da tarefa
 * @property {string} description - Descrição detalhada da tarefa
 * @property {boolean} isChecked - Estado de conclusão da tarefa
 * @property {string} label - Texto exibido na interface (geralmente igual ao título)
 * @property {string} [createdAt] - Data de criação da tarefa
 */
interface Task {
  id?: number;
  title: string;
  description: string;
  isChecked: boolean;
  label: string;
  createdAt?: string;
}

/**
 * Componente responsável por gerenciar as metas diárias do usuário
 * @class GoalsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.scss'],
})
export class GoalsComponent implements OnInit {
  /** Array de tarefas pendentes */
  tasks: Task[] = [];
  /** Array de tarefas concluídas */
  completedTasks: Task[] = [];

  /**
   * @constructor
   * @param {KognitoRestService} kognitoRest - Serviço para comunicação com a API
   */
  constructor(private kognitoRest: KognitoRestService) {}

  /**
   * Inicializa o componente carregando as tarefas pendentes e concluídas
   * @method ngOnInit
   */
  ngOnInit() {
    this.loadTasks();
    this.loadCompletedTasks();
  }

  /**
   * Verifica se uma data fornecida corresponde ao dia atual
   * @private
   * @param {string} dateString - Data em formato string para comparação
   * @returns {boolean} True se a data for hoje, False caso contrário
   */
  private isToday(dateString: string): boolean {
    const today = new Date();
    const taskDate = new Date(dateString);

    return (
      today.getDate() === taskDate.getDate() &&
      today.getMonth() === taskDate.getMonth() &&
      today.getFullYear() === taskDate.getFullYear()
    );
  }

  /**
   * Carrega as tarefas pendentes do dia atual
   * Filtra apenas tarefas não concluídas criadas hoje
   * Em caso de erro, limpa a lista de tarefas
   */
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
              .filter((task) => task.isChecked === false && task.createdAt && this.isToday(task.createdAt))
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

  /**
   * Carrega as tarefas concluídas do dia atual
   * Filtra apenas tarefas concluídas criadas hoje
   * Em caso de erro, limpa a lista de tarefas concluídas
   */
  loadCompletedTasks() {
    this.kognitoRest
      .request<{ success: boolean; data: Task[] }>({
        method: 'GET',
        relativeURL: 'api/metas/concluidas-hoje',
      })
      .subscribe({
        next: (response) => {
          if (response?.data && Array.isArray(response.data)) {
            const todayCompletedTasks = response.data
              .filter((task) => task.createdAt && this.isToday(task.createdAt))
              .map((task) => ({
                ...task,
                label: task.title || '',
                isChecked: true,
              }));

            this.completedTasks = todayCompletedTasks;
          }
        },
        error: (error: Error) => {
          console.error('Erro ao carregar metas concluídas:', error);
          this.completedTasks = [];
        },
      });
  }

  /**
   * Adiciona uma nova tarefa através de prompts de entrada
   * Salva localmente e envia para a API
   * Em caso de erro na API, remove a tarefa da lista local
   */
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

  /**
   * Manipula o evento de marcação de uma tarefa como concluída
   * Move a tarefa para a lista de concluídas e atualiza na API
   * Em caso de erro, reverte a movimentação
   * @param {number} index - Índice da tarefa na lista de pendentes
   * @param {boolean} checked - Estado do checkbox
   */
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

  /**
   * Move uma tarefa da lista de pendentes para a lista de concluídas
   * @private
   * @param {number} index - Índice da tarefa a ser movida
   */
  private moveTaskToCompleted(index: number): void {
    const completedTask = this.tasks.splice(index, 1)[0];
    this.completedTasks.push({
      ...completedTask,
      isChecked: true,
      label: completedTask.title,
    });
  }
}
