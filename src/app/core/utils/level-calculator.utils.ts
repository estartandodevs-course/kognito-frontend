/**
 * Calcula o número de atividades necessárias para alcançar o próximo nível.
 * @param currentLevel O nível atual do aluno.
 * @returns O número de atividades necessárias para o próximo nível.
 */
export function calculateActivitiesForNextLevel(currentLevel: number): number {
  return (currentLevel + 1) * 3;
}

/**
 * Atualiza o nível do aluno com base nas atividades completadas.
 * A fórmula usada para calcular o novo nível é baseada na progressão aritmética do número de atividades por nível.
 * @param activitiesCompleted Número de atividades completadas pelo aluno.
 * @returns Um objeto contendo o novo nível e o número de atividades restantes após o cálculo.
 */
export function calculateNewLevel(activitiesCompleted: number): { newLevel: number; remainingActivities: number } {
  const newLevel = Math.floor((-1 + Math.sqrt(1 + (8 * activitiesCompleted) / 3)) / 2);
  const remainingActivities = activitiesCompleted - calculateActivitiesForNextLevel(newLevel);

  return { newLevel, remainingActivities };
}
