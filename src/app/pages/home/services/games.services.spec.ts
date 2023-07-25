import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GameInfo } from '../models/game.interface';
import { GameInfoService } from './games.service';
import { environment } from 'src/environments/environment';

describe('GameInfoService', () => {
  let service: GameInfoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameInfoService],
    });

    service = TestBed.inject(GameInfoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set gameInfoSource with provided data', () => {
    const gameInfoData: GameInfo[] = [
      { title: 'Game 1' } as GameInfo,
      { title: 'Game 2' } as GameInfo,
    ];
    service.setGameInfo(gameInfoData);

    service.gameInfo$.subscribe(gameInfo => {
      expect(gameInfo).toEqual(gameInfoData);
    });
  });

  it('should filter gameInfo based on the title, platform and category', () => {
    const fakeApiResponse: GameInfo[] = [
      { title: 'Fortnite' } as GameInfo,
      { title: 'Genshin Impact' } as GameInfo,
    ];

    service.setTitle('fortnite');
    service.applyFilters({ platform: 'PC', category: 'shooter' });

    service.refreshGameInfo();

    const request = httpMock.expectOne(
      `${environment.apiBase}api/games?platform=PC&category=shooter`
    );
    expect(request.request.method).toBe('GET');
    expect(request.request.params.get('platform')).toBe('PC');
    expect(request.request.params.get('category')).toBe('shooter');

    request.flush(fakeApiResponse);

    service.gameInfo$.subscribe(gameInfo => {
      expect(gameInfo).toEqual([{ title: 'Fortnite' } as GameInfo]);
    });
  });
});
