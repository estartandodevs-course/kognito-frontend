import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.scss',
})
export class CalendarComponent {
  // Lista de dias da semana
  daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  // Data atual
  today = new Date();
  currentDayIndex = this.today.getDay(); // Índice do dia da semana (0 = Domingo)
  currentDate = this.today.getDate(); // Número do dia
  currentMonth = this.today.toLocaleString('default', { month: 'long' }); // Nome do mês

  // Calcula o número de um dia específico da semana
  getDayNumber(index: number): number {
    const startOfWeek = new Date(this.today);
    startOfWeek.setDate(this.currentDate - this.currentDayIndex + index); // Calcula o número do dia
    return startOfWeek.getDate();
  }

  // Verifica se é o dia atual
  isCurrentDay(index: number): boolean {
    return index === this.currentDayIndex;
  }
}
