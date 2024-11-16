import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TimeCaptureService {
  constructor() {}
  /**
   * Retorna a hora atual do dispositivo.
   *
   * @returns A hora atual do dispositivo (0 a 23).
   */
  getCurrentHour(): number {
    return new Date().getHours();
  }

  /**
   * Retorna a data e hora atual do dispositivo.
   *
   * @returns Data e hora atual do dispositivo no formato ISO.
   */
  getCurrentDateTime(): string {
    return new Date().toISOString();
  }

  /**
   * Retorna o horário atual como um objeto Date.
   *
   * @returns Objeto Date representando o horário atual.
   */
  getCurrentDate(): Date {
    return new Date();
  }
}
