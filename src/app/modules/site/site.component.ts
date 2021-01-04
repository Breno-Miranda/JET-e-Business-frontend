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

  sectionOne = [
    {src: '../../../assets/img/sectionOne/roupa-de-banho.svg' , title: 'Moda Verão'},
    {src: '../../../assets/img/sectionOne/calcao.svg' , title: 'Moda Masculina'},
    {src: '../../../assets/img/sectionOne/roupa-de-banho.svg' , title: 'Moda Verão'},
    {src: '../../../assets/img/sectionOne/calcao.svg' , title: 'Moda Masculina'},
  ];

  produtcs = [
    {
      title: 'roupa x',
      src: '../../../assets/img/sectionOne/roupa-de-banho.svg',
      description: 'essa roupa e uma roupa',
    },
    {
      title: 'roupa x',
      src: '../../../assets/img/sectionOne/roupa-de-banho.svg',
      description: 'essa roupa e uma roupa',
    },
    {
      title: 'roupa x',
      src: '../../../assets/img/sectionOne/roupa-de-banho.svg',
      description: 'essa roupa e uma roupa',
    },
    {
      title: 'roupa x',
      src: '../../../assets/img/sectionOne/roupa-de-banho.svg',
      description: 'essa roupa e uma roupa',
    },
    {
      title: 'roupa x',
      src: '../../../assets/img/sectionOne/roupa-de-banho.svg',
      description: 'essa roupa e uma roupa',
    },
    {
      title: 'roupa x',
      src: '../../../assets/img/sectionOne/roupa-de-banho.svg',
      description: 'essa roupa e uma roupa',
    },
    {
      title: 'roupa x',
      src: '../../../assets/img/sectionOne/roupa-de-banho.svg',
      description: 'essa roupa e uma roupa',
    },
    {
      title: 'roupa x',
      src: '../../../assets/img/sectionOne/roupa-de-banho.svg',
      description: 'essa roupa e uma roupa',
    },
  ];

  constructor() { }

  ngOnInit(): void {
    
  }

}
