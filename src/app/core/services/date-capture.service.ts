import { Injectable } from '@angular/core';

// Definindo o tipo de configuração para a formatação de datas
export type DateFormat = 'short' | 'medium' | 'long' | 'full';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private readonly defaultDateFormatter: Intl.DateTimeFormat;

  constructor() {
    // Inicializando o formatador com um padrão
    this.defaultDateFormatter = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  /**
   * Obtém a data atual no formato 'YYYY-MM-DD'.
   * @returns Data atual em formato ISO string (ex: '2023-12-25')
   */
  getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  /**
   * Formata uma data para um formato específico.
   * @param date A data que será formatada (Date ou string)
   * @param format O formato desejado
   * @returns Data formatada como string
   */
  formatDate(date: Date | string, format: DateFormat = 'medium'): string {
    const dateInstance = typeof date === 'string' ? new Date(date) : date;

    if (!this.isValidDate(dateInstance)) {
      throw new Error('Invalid date provided');
    }

    const formatters: Record<DateFormat, Intl.DateTimeFormatOptions> = {
      short: { year: 'numeric', month: 'short', day: '2-digit' },
      medium: { year: 'numeric', month: 'short', day: 'numeric' },
      long: { year: 'numeric', month: 'long', day: '2-digit' },
      full: { year: 'numeric', month: 'long', day: '2-digit', weekday: 'long' },
    };

    const formatter = new Intl.DateTimeFormat('pt-BR', formatters[format]);
    return formatter.format(dateInstance);
  }

  /**
   * Adiciona um número de dias à data fornecida.
   * @param date A data de referência
   * @param days Número de dias a adicionar
   * @returns A nova data com os dias adicionados
   */
  addDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  /**
   * Verifica se a data fornecida é válida.
   * @param date A data a ser verificada
   * @returns Verdadeiro se a data for válida, falso caso contrário
   */
  isValidDate(date: Date | string): boolean {
    const dateInstance = typeof date === 'string' ? new Date(date) : date;
    return !isNaN(dateInstance.getTime());
  }

  // Métodos auxiliares para zero-padding e nomes de meses
  private padZero(value: number): string {
    return value.toString().padStart(2, '0');
  }

  private getMonthAbbreviation(date: Date): string {
    const months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    return months[date.getMonth()];
  }

  private getMonthFullName(date: Date): string {
    const months = [
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
    ];
    return months[date.getMonth()];
  }
}
