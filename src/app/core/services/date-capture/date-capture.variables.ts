// Nomes completos dos meses
export const MONTHS_FULL = [
  'janeiro',
  'fevereiro',
  'março',
  'abril',
  'maio',
  'junho',
  'julho',
  'agosto',
  'setembro',
  'outubro',
  'novembro',
  'dezembro',
] as const;

export const MONTHS_ABBREVIATED = MONTHS_FULL.map((month) => month.substring(0, 3));
