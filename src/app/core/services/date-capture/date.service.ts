import { Injectable } from '@angular/core';
import { DateFormat } from './date-capture.types';
import { MONTHS_FULL, MONTHS_ABBREVIATED } from './date-capture.variables';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  private readonly defaultDateFormatter: Intl.DateTimeFormat;

  constructor() {
    this.defaultDateFormatter = new Intl.DateTimeFormat('pt-BR', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  }

  /**
   * Obtém a data atual no formato 'YYYY-MM-DD'.
   * @returns {string} A data atual no formato ISO string, como '2023-12-25'.
   */
  getCurrentDate(): string {
    return new Date().toISOString().split('T')[0];
  }

  /**
   * Formata uma data para um formato específico.
   *
   * Este método converte a data fornecida para uma string no formato especificado.
   * Se a data fornecida for inválida, um erro será lançado.
   *
   * @param {Date | string} date A data que será formatada. Pode ser uma instância de Date ou uma string que represente uma data.
   * @param {DateFormat} [format='medium'] O formato desejado para a data. Pode ser:
   *  - 'short' para um formato abreviado (ex: '25/12/2023'),
   *  - 'medium' para um formato padrão (ex: '25 dez. 2023'),
   *  - 'long' para um formato mais completo (ex: '25 dezembro 2023'),
   *  - 'full' para um formato com o nome do dia da semana (ex: 'segunda-feira, 25 dezembro 2023').
   * @returns {string} A data formatada de acordo com o formato especificado.
   * @throws {Error} Lança um erro se a data fornecida for inválida.
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
   *
   * Este método retorna uma nova data, que é o resultado de adicionar o número especificado de dias
   * à data de referência.
   *
   * @param {Date} date A data à qual os dias serão adicionados.
   * @param {number} days O número de dias a adicionar à data fornecida. Pode ser negativo para subtrair dias.
   * @returns {Date} A nova data com os dias adicionados.
   */
  addDays(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(date.getDate() + days);
    return newDate;
  }

  /**
   * Verifica se a data fornecida é válida.
   *
   * Este método verifica se o valor fornecido é uma data válida, seja ela uma instância de Date ou uma string
   * representando uma data válida.
   *
   * @param {Date | string} date A data a ser verificada. Pode ser uma instância de Date ou uma string.
   * @returns {boolean} Retorna verdadeiro se a data for válida, falso caso contrário.
   */
  isValidDate(date: Date | string): boolean {
    const dateInstance = typeof date === 'string' ? new Date(date) : date;
    return !isNaN(dateInstance.getTime());
  }

  /**
   * Obtém a abreviação do mês a partir de uma data.
   *
   * Este método retorna a abreviação do mês referente à data fornecida.
   *
   * @param {Date} date A data de referência para obter a abreviação do mês.
   * @returns {string} A abreviação do mês (ex: 'jan' para janeiro).
   */
  private getMonthAbbreviation(date: Date): string {
    return MONTHS_ABBREVIATED[date.getMonth()];
  }

  /**
   * Obtém o nome completo do mês a partir de uma data.
   *
   * Este método retorna o nome completo do mês referente à data fornecida.
   *
   * @param {Date} date A data de referência para obter o nome completo do mês.
   * @returns {string} O nome completo do mês (ex: 'janeiro' para janeiro).
   */
  private getMonthFullName(date: Date): string {
    return MONTHS_FULL[date.getMonth()];
  }
}
