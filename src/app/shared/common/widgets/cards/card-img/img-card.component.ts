import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})
export class ImgCardComponent implements OnInit {

  data: any;

  @Input() Data: any;

  constructor() {}

  ngOnInit() { 
    this.data = this.Data; 
    console.log(this.data);
  }


}
