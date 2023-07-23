import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { DebugElement } from '@angular/core';
import { GameInfoService } from '../../home/services/games.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;
  let de: DebugElement;
  let gameInfoService: GameInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, HttpClientModule],
      declarations: [SearchComponent],
      providers: [GameInfoService, FormBuilder],
    });
    fixture = TestBed.createComponent(SearchComponent);
    de = fixture.debugElement;
    gameInfoService = de.injector.get(GameInfoService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set title and refresh game info when form is valid', fakeAsync(() => {
    spyOn(gameInfoService, 'setTitle');
    spyOn(gameInfoService, 'refreshGameInfo');

    component.myForm.controls['title'].setValue('overwatch');

    component.onSubmit();

    tick(200);

    expect(gameInfoService.setTitle).toHaveBeenCalledWith('overwatch');
    expect(gameInfoService.refreshGameInfo).toHaveBeenCalled();
  }));
});
