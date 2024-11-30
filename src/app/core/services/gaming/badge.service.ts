import { Injectable } from '@angular/core';

/**
 * Serviço responsável pela gestão de emblemas do usuário.
 * Permite conceder emblemas e obter a lista de emblemas conquistados.
 */
@Injectable({
  providedIn: 'root',
})
export class BadgeService {
  private badges: string[] = [];

  /**
   * Concede um emblema ao usuário caso ainda não tenha sido conquistado.
   * @param badgeName O nome do emblema a ser concedido.
   * @returns void
   */
  awardBadge(badgeName: string): void {
    if (!this.badges.includes(badgeName)) {
      this.badges.push(badgeName);
      console.log(`Emblema conquistado: ${badgeName}`);
    }
  }

  /**
   * Retorna a lista de emblemas conquistados pelo usuário.
   * @returns Um array contendo os nomes dos emblemas conquistados.
   */
  getBadges(): string[] {
    return this.badges;
  }
}
