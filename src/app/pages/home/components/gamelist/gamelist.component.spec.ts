import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { GamelistComponent } from './gamelist.component';
import { GameInfoService } from '../../services/games.service';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { GameInfo } from '../../models/game.interface';
import { HttpClientModule } from '@angular/common/http';

describe('GamelistComponent', () => {
  let component: GamelistComponent;
  let fixture: ComponentFixture<GamelistComponent>;
  let gameInfoService: GameInfoService;
  let mockData : GameInfo[] = Array(100).fill({
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
    freetogame_profile_url: '',
  });
  let de: DebugElement;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GamelistComponent],
      providers: [GameInfoService],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
    fixture = TestBed.createComponent(GamelistComponent);
    de = fixture.debugElement;
    component = fixture.componentInstance;
    gameInfoService = de.injector.get(GameInfoService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should increase the batch size when onScroll() is called', () => {
    expect(component.batch).toEqual(20);
    spyOn(gameInfoService.gameInfoSource, 'getValue').and.returnValue(mockData);
    component.onScroll();
    expect(component.batch).toEqual(40);
  });
});
