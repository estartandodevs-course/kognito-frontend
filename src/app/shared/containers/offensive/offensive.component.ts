import { Component, OnInit } from '@angular/core';
import { OffensiveService } from 'app/core/services/gaming/offensive.service';

/**
 * Componente responsável por exibir e gerenciar o progresso do aluno em atividades e níveis.
 * Permite adicionar atividades e exibir o nível atual e o progresso do aluno.
 */
@Component({
  selector: 'app-offensive',
  templateUrl: './offensive.component.html',
  styleUrls: ['./offensive.component.scss'],
})
export class OffensiveComponent implements OnInit {
  progress = 0;
  currentLevel = 0;
  activitiesRemaining = 0;

  constructor(private offensiveService: OffensiveService) {}

  /**
   * Método de inicialização do componente.
   * Este método é chamado quando o componente é carregado, e seu principal objetivo é
   * chamar o método `updateProgress` para garantir que o progresso seja atualizado ao inicializar.
   *
   * @returns void
   */
  ngOnInit(): void {
    this.updateProgress();
  }

  /**
   * Adiciona uma nova atividade e atualiza o progresso e o nível do aluno.
   * Este método interage com o serviço `OffensiveService` para registrar a atividade e recalcular
   * o progresso do aluno e o número de atividades restantes para alcançar o próximo nível.
   *
   * @returns void
   */
  addActivity(): void {
    this.offensiveService.addActivity();
    this.updateProgress();
  }

  /**
   * Atualiza as informações de progresso e nível com base nas informações fornecidas pelo serviço `OffensiveService`.
   * Este método ajusta o nível atual, o progresso (em porcentagem) e o número de atividades restantes.
   *
   * @private
   * @returns void
   */
  private updateProgress(): void {
    const { currentLevel, progress } = this.offensiveService.getProgress();
    this.currentLevel = currentLevel;
    this.progress = progress * 100; // Converte o progresso para uma porcentagem
    this.activitiesRemaining = this.offensiveService.getActivitiesRemaining();
  }
}
