/**
 * Calcula o número de atividades necessárias para alcançar o próximo nível.
 * @param currentLevel O nível atual do aluno.
 * @returns O número de atividades necessárias.
 */
export function calculateActivitiesForNextLevel(currentLevel: number): number {
  return (currentLevel + 1) * 3;
}

/**
 * Atualiza o nível do aluno com base nas atividades completadas.
 * @param activitiesCompleted Número de atividades completadas.
 * @param currentLevel Nível atual do aluno.
 * @returns O novo nível e o restante das atividades não utilizadas.
 */
export function calculateNewLevel(
  activitiesCompleted: number,
  currentLevel: number,
): { newLevel: number; remainingActivities: number } {
  let totalActivities = activitiesCompleted;
  let level = currentLevel;

  while (totalActivities >= calculateActivitiesForNextLevel(level)) {
    totalActivities -= calculateActivitiesForNextLevel(level);
    level++;
  }

  return { newLevel: level, remainingActivities: totalActivities };
}
