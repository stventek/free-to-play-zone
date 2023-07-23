import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameTileComponent } from './game-tile.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('GameTileComponent', () => {
  let component: GameTileComponent;
  let fixture: ComponentFixture<GameTileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameTileComponent],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(GameTileComponent);
    component = fixture.componentInstance;
    component.gameInfo = {
      id: 1,
      title: '',
      thumbnail: '',
      short_description: '',
      game_url: '',
      genre: '',
      platform: '',
      publisher: '',
      developer: '',
      release_date: '',
      freetogame_profile_url: ''
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
