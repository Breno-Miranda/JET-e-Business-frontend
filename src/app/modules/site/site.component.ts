import { Component, OnInit } from '@angular/core';

// service
import { ProductsService } from 'src/app/services/products.service';

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

  produtcs: any;
  
  categorys: any;

  constructor(private productsSevice: ProductsService) {
    // products services
    this.productsSevice.getAll().subscribe( data => {
      this.produtcs = data
    });
   }

  ngOnInit(): void {}

}
