import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {


  data = {
    title: '',
    src: '',
    description: '',
  };

  @Input() Data: any;

  constructor() { 
  }

  ngOnInit(): void {
    this.data = this.Data;
   
  }

}
