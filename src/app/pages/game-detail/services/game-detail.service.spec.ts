import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { GameDetailService } from './game-detail.service';
import { GameDetail } from '../models/game-detail.interface';
import { environment } from 'src/environments/environment';

describe('GameDetailService', () => {
  let service: GameDetailService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GameDetailService],
    });

    service = TestBed.inject(GameDetailService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set gameDetailSource with provided data', () => {
    const gameDetailData = {
      id: 1,
      title: 'Test Game',
    } as GameDetail;
    service.setGameDetail(gameDetailData);

    service.gameInfo$.subscribe(gameDetail => {
      expect(gameDetail).toEqual(gameDetailData);
    });
  });

  it('should make an HTTP GET request to fetch game detail', () => {
    const gameId = '1';
    const fakeApiResponse: GameDetail = {
      id: +gameId,
      title: 'Test Game',
    } as GameDetail;

    service.refreshGameDetail('1');

    const request = httpMock.expectOne(
      `${environment.apiBase}api/game?id=${gameId}`
    );
    expect(request.request.method).toBe('GET');

    request.flush(fakeApiResponse);

    service.gameInfo$.subscribe(gameDetail => {
      expect(gameDetail).toEqual(fakeApiResponse);
    });
  });
});
