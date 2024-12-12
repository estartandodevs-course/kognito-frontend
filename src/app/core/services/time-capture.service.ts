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

  /**
   * Retorna uma saudação com base na hora atual e o nome do usuário logado.
   *
   * @returns A saudação correspondente ao horário atual e nome do usuário.
   */
  getSaudation(): string {
    const hour = this.getCurrentHour();
    let greeting: string;

    const storedAuth = localStorage.getItem('auth');
    let userName = 'User';

    if (storedAuth) {
      const authData = JSON.parse(storedAuth);
      userName = authData.name;
    }

    if (hour >= 6 && hour < 12) {
      greeting = 'Bom dia';
    } else if (hour >= 12 && hour < 18) {
      greeting = 'Boa tarde';
    } else {
      greeting = 'Boa noite';
    }

    return `${greeting}, ${userName}!`;
  }
}
