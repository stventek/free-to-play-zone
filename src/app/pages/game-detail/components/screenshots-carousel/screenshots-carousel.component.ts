import { Component, Input } from '@angular/core';
import { ScreeenshotData } from '../../types/screenshot-data.interface';

@Component({
  selector: 'app-screenshots-carousel',
  templateUrl: './screenshots-carousel.component.html',
  styleUrls: ['./screenshots-carousel.component.scss'],
})
export class ScreenshotsCarouselComponent {
  @Input() screenshots!: ScreeenshotData[];
}
