import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { FiltersControlsComponent } from './filters-controls.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameInfoService } from '../../services/games.service';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgbTypeahead, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

describe('FiltersControlsComponent', () => {
  let component: FiltersControlsComponent;
  let fixture: ComponentFixture<FiltersControlsComponent>;
  let gameInfoService: GameInfoService;
  let de: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        NgbTypeaheadModule,
      ],
      declarations: [FiltersControlsComponent],
      providers: [GameInfoService, NgbTypeahead],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(FiltersControlsComponent);
    de = fixture.debugElement;
    component = fixture.componentInstance;
    gameInfoService = de.injector.get(GameInfoService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should apply filters and refresh game info when form is valid', fakeAsync(() => {
    spyOn(gameInfoService, 'applyFilters');
    spyOn(gameInfoService, 'refreshGameInfo');

    component.filterForm.controls['category'].setValue('mmorpg');
    component.filterForm.controls['platform'].setValue('');

    component.applyFilters();

    tick(200);

    expect(gameInfoService.applyFilters).toHaveBeenCalledWith({
      category: 'mmorpg',
      platform: '',
    });
    expect(gameInfoService.refreshGameInfo).toHaveBeenCalled();
  }));
});
