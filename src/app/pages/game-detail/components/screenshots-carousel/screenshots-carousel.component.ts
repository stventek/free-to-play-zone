import {
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ScreeenshotData } from '../../types/screenshot-data.interface';
import { NgbCarousel } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-screenshots-carousel',
  templateUrl: './screenshots-carousel.component.html',
  styleUrls: ['./screenshots-carousel.component.scss'],
})
export class ScreenshotsCarouselComponent implements OnChanges, AfterViewInit {
  @Input() screenshots!: ScreeenshotData[];

  @ViewChild('screenshotCarousel', { static: true }) carousel!: NgbCarousel;
  private carouselInitialized = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.carouselInitialized) {
      this.carousel.select('active-screenshot');
    }
  }

  ngAfterViewInit(): void {
    this.carouselInitialized = true;
    this.carousel.select('active-screenshot');
  }
}
