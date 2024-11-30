import { Injectable } from '@angular/core';

/**
 * Serviço responsável pela gestão das tarefas semanais.
 * Permite obter o número de tarefas atribuídas para a semana.
 */
@Injectable({
  providedIn: 'root',
})
export class TaskService {
  /**
   * Retorna o número de tarefas semanais.
   * @returns O número de tarefas semanais atribuídas.
   */
  getWeeklyTasks(): number {
    return 3; // Simula 3 tarefas semanais
  }
}
