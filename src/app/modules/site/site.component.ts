import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  data = [
    {src: '../../../assets/img/carousel/img-01.jpg' , title: 'img-01'},
    {src: '../../../assets/img/carousel/img-02.jpg' , title: 'img-02'},
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
