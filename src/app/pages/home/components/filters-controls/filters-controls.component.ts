import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GameInfoService } from '../../services/games.service';
import {
  Observable,
  OperatorFunction,
  debounceTime,
  distinctUntilChanged,
  map,
} from 'rxjs';

@Component({
  selector: 'app-filters-controls',
  templateUrl: './filters-controls.component.html',
  styleUrls: ['./filters-controls.component.scss'],
})
export class FiltersControlsComponent {
  filterForm: FormGroup;

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term =>
        term.length < 1
          ? []
          : this.categories
              .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );

  categories: string[] = [
    'mmorpg',
    'shooter',
    'strategy',
    'moba',
    'racing',
    'sports',
    'social',
    'sandbox',
    'open-world',
    'survival',
    'pvp',
    'pve',
    'pixel',
    'voxel',
    'zombie',
    'turn-based',
    'first-person',
    'third-person',
    'top-down',
    'tank',
    'space',
    'sailing',
    'side-scroller',
    'superhero',
    'permadeath',
    'card',
    'battle-royale',
    'mmo',
    'mmofps',
    'mmotps',
    '3d',
    '2d',
    'anime',
    'fantasy',
    'sci-fi',
    'fighting',
    'action-rpg',
    'action',
    'military',
    'martial-arts',
    'flight',
    'low-spec',
    'tower-defense',
    'horror',
    'mmorts',
  ];

  constructor(
    private formBuilder: FormBuilder,
    private gameInfoService: GameInfoService
  ) {
    this.filterForm = this.formBuilder.group({
      category: [''],
      platform: [''],
    });
  }

  applyFilters() {
    if (this.filterForm.valid) {
      this.gameInfoService.applyFilters(this.filterForm.value);
      this.gameInfoService.refreshGameInfo();
    }
  }
}
