import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GameInfoService } from '../../services/games.service';
import {
  Observable,
  OperatorFunction,
  Subject,
  debounceTime,
  distinctUntilChanged,
  filter,
  map,
  merge,
} from 'rxjs';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-filters-controls',
  templateUrl: './filters-controls.component.html',
  styleUrls: ['./filters-controls.component.scss'],
})
export class FiltersControlsComponent {
  filterForm: FormGroup;

  @ViewChild('instance', { static: true }) instance!: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search: OperatorFunction<string, readonly string[]> = (
    text$: Observable<string>
  ) => {
    const debouncedText$ = text$.pipe(
      debounceTime(200),
      distinctUntilChanged()
    );
    const clicksWithClosedPopup$ = this.click$.pipe(
      filter(() => !this.instance.isPopupOpen())
    );
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term =>
        this.categories
          .filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
          .slice(0, 10)
      )
    );
  };

  categories: string[] = [
    '2d',
    '3d',
    'action',
    'action-rpg',
    'anime',
    'battle-royale',
    'card',
    'fantasy',
    'fighting',
    'first-person',
    'flight',
    'horror',
    'low-spec',
    'martial-arts',
    'military',
    'mmo',
    'mmofps',
    'mmorpg',
    'mmorts',
    'mmotps',
    'moba',
    'open-world',
    'pve',
    'pvp',
    'pixel',
    'permadeath',
    'racing',
    'sandbox',
    'sci-fi',
    'sailing',
    'shooter',
    'side-scroller',
    'social',
    'space',
    'sports',
    'strategy',
    'superhero',
    'survival',
    'tank',
    'third-person',
    'top-down',
    'tower-defense',
    'turn-based',
    'voxel',
    'zombie',
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
