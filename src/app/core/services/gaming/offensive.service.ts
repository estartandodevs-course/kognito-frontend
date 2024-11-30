import { Injectable } from '@angular/core';
import { calculateActivitiesForNextLevel, calculateNewLevel } from './level-calculator.service';

/**
 * Serviço responsável pela gestão das atividades e do progresso do aluno.
 * Permite adicionar atividades, obter o progresso e o número de atividades restantes para o próximo nível.
 */
@Injectable({
  providedIn: 'root',
})
export class OffensiveService {
  private currentLevel = 1;
  private activitiesCompleted = 0;

  constructor() {}

  /**
   * Adiciona uma nova atividade e atualiza o nível e progresso do aluno.
   * Caso o aluno suba de nível, o progresso é ressetado para a quantidade de atividades restantes.
   * @returns void
   */
  addActivity(): void {
    this.activitiesCompleted++;

    const { newLevel, remainingActivities } = calculateNewLevel(this.activitiesCompleted, this.currentLevel);

    if (newLevel > this.currentLevel) {
      this.currentLevel = newLevel;
      this.activitiesCompleted = remainingActivities;
      console.log(`🎉 Parabéns! Você subiu para o nível ${this.currentLevel}`);
    }
  }

  /**
   * Obtém o progresso atual do aluno.
   * @returns Um objeto contendo o nível atual e o progresso como uma porcentagem.
   */
  getProgress(): { currentLevel: number; progress: number } {
    const activitiesForNextLevel = calculateActivitiesForNextLevel(this.currentLevel);

    return {
      currentLevel: this.currentLevel,
      progress: this.activitiesCompleted / activitiesForNextLevel,
    };
  }

  /**
   * Obtém o número de atividades restantes para alcançar o próximo nível.
   * @returns O número de atividades restantes.
   */
  getActivitiesRemaining(): number {
    const activitiesForNextLevel = calculateActivitiesForNextLevel(this.currentLevel);

    return activitiesForNextLevel - this.activitiesCompleted;
  }
}
