import { Component, OnInit, AfterViewInit} from '@angular/core';
import { carouselState } from './../../animations/carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [carouselState]
})
export class CarouselComponent implements OnInit, AfterViewInit {

  public itemStates = ['show', 'right', 'right', 'right'];
  public currentIndex = 0;
  public auto: any;
  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.openAuto();
  }

  switchItem(_index: number , _auto: boolean = false) {
    if (_index > this.currentIndex) {
      this.next(_index);
    } else if (_index < this.currentIndex) {
      this.prev(_index);
    }
    this.currentIndex = _index;

    if (!_auto) {
      this.resetAuto();
    }
  }

  prev(_index: number) {
    this.itemStates.forEach((value , index) => {
      if (index > _index) {
        this.itemStates[index] = 'right';
      } else if (index === _index) {
        this.itemStates[index] = 'show';
      }
    });
  }

  next(_index: number) {
    this.itemStates.forEach((value , index) => {
      if (index < _index) {
        this.itemStates[index] = 'left';
      } else if (index === _index) {
        this.itemStates[index] = 'show';
      }
    });
  }

  openAuto () {
    this.auto = setInterval( () => {
      this.switchItem(this.nextIndex(), true);
    }, 3000);
  }

  nextIndex () {
    return (this.currentIndex + 1) >= 4 ? (this.currentIndex + 1 - 4) : (this.currentIndex + 1);
  }

  resetAuto () {
    if (this.auto) {
      clearInterval(this.auto);
    }
    this.openAuto();
  }
}
