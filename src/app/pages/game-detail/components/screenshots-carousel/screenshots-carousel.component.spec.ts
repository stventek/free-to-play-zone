import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ScreenshotsCarouselComponent } from './screenshots-carousel.component';
import { ScreeenshotData } from '../../types/screenshot-data.interface';

describe('ScreenshotsCarouselComponent', () => {
  let component: ScreenshotsCarouselComponent;
  let fixture: ComponentFixture<ScreenshotsCarouselComponent>;

  const mockScreenshots: ScreeenshotData[] = [
    { id: 1, image: 'image1.jpg', active: true },
    { id: 2, image: 'image2.jpg', active: false },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScreenshotsCarouselComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(ScreenshotsCarouselComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have input property `screenshots` populated correctly', () => {
    component.screenshots = mockScreenshots;
    fixture.detectChanges();

    expect(component.screenshots).toEqual(mockScreenshots);
  });
});
