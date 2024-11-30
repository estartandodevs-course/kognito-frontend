import { Injectable } from '@angular/core';

/**
 * Serviço responsável pela gestão dos objetivos alcançados.
 * Permite incrementar, resetar e obter o número de objetivos alcançados.
 */
@Injectable({
  providedIn: 'root',
})
export class GoalService {
  private goalsAchieved: number = 0;

  /**
   * Incrementa o número de objetivos alcançados em 1.
   * @returns void
   */
  incrementGoals(): void {
    this.goalsAchieved++;
  }

  /**
   * Reseta o número de objetivos alcançados para 0.
   * @returns void
   */
  resetGoals(): void {
    this.goalsAchieved = 0;
  }

  /**
   * Retorna o número total de objetivos alcançados.
   * @returns O número de objetivos alcançados.
   */
  getGoalsAchieved(): number {
    return this.goalsAchieved;
  }
}
