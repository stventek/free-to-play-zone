import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GameInfoService } from '../../services/games.service';

@Component({
  selector: 'app-filters-controls',
  templateUrl: './filters-controls.component.html',
  styleUrls: ['./filters-controls.component.css']
})
export class FiltersControlsComponent {
  filterForm: FormGroup;

  categories: string[] = [
    'mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox',
    'open-world', 'survival', 'pvp', 'pve', 'pixel', 'voxel', 'zombie', 'turn-based',
    'first-person', 'third-person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller',
    'superhero', 'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d',
    'anime', 'fantasy', 'sci-fi', 'fighting', 'action-rpg', 'action', 'military', 'martial-arts',
    'flight', 'low-spec', 'tower-defense', 'horror', 'mmorts'
  ];

  constructor(private formBuilder: FormBuilder, private gameInfoService: GameInfoService) {
    this.filterForm = this.formBuilder.group({
      category: [''],
      platform: ['']
    });
  }

  applyFilters(){
    if (this.filterForm.valid) {
      this.gameInfoService.applyFilters(this.filterForm.value);
      this.gameInfoService.refreshGameInfo();
    }
  }
}
