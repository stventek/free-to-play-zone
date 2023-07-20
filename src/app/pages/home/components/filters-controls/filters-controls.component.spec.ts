import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltersControlsComponent } from './filters-controls.component';

describe('FiltersControlsComponent', () => {
  let component: FiltersControlsComponent;
  let fixture: ComponentFixture<FiltersControlsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiltersControlsComponent]
    });
    fixture = TestBed.createComponent(FiltersControlsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
