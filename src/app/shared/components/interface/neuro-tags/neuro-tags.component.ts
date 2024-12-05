import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-neuro-tags',
  templateUrl: './neuro-tags.component.html',
  styleUrls: ['./neuro-tags.component.scss'],
})
export class NeuroTagsComponent {
  @Input() tags: string[] = [];
  @Input() tagType: 'filled' | 'outlined' = 'filled';

  selectedTag: string | null = null;

  /**
   * Emite a tag selecionada para o componente pai.
   * @param tag A tag selecionada.
   */
}
