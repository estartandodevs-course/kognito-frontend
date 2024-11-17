import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-neuro-tags',
  templateUrl: './neuro-tags.component.html',
  styleUrls: ['./neuro-tags.component.scss'],
})
export class NeuroTagsComponent {
  // Recebe as tags diretamente do pai
  @Input() tags: string[] = [];
  @Output() tagSelected = new EventEmitter<string>();

  /**
   * Emite a tag selecionada para o componente pai.
   * @param tag A tag selecionada pelo usuário.
   */
  selectTag(tag: string): void {
    this.tagSelected.emit(tag);
  }
}
