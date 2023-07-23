import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { GameDetailComponent } from './game-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameDetailService } from '../../services/game-detail.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { DebugElement } from '@angular/core';

describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;
  let gameDetailService: GameDetailService;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GameDetailComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        GameDetailService,
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: '123' }),
          },
        },
      ],
    });
    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    gameDetailService = de.injector.get(GameDetailService);
    spyOn(gameDetailService, 'refreshGameDetail');
    spyOn(gameDetailService, 'setGameDetail');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to route params and call refreshGameDetail on ngOnInit', waitForAsync(() => {
    expect(component.gameId).toEqual('123');
    expect(gameDetailService.refreshGameDetail).toHaveBeenCalledWith('123');
  }));

  it('should unsubscribe and set gameDetail to null on ngOnDestroy', () => {
    component.ngOnDestroy();
    expect(component.routeSubscription.closed).toBe(true);
    expect(gameDetailService.setGameDetail).toHaveBeenCalledWith(null);
  });
});
