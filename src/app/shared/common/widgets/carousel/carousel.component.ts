import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  data = [{
    title: '',
    src: '',
  }];

  @Input() Data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = this.Data;
  }

}
