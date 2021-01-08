import { Component, OnInit } from '@angular/core';

// services
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  produtcs: any;

  medias = [
    {src: '../../../assets/img/media/roupa-de-banho.svg' , title: 'Moda Verão'},
    {src: '../../../assets/img/media/calcao.svg' , title: 'Moda Masculina'},
    {src: '../../../assets/img/media/roupa-de-banho.svg' , title: 'Moda Verão'},
    {src: '../../../assets/img/media/calcao.svg' , title: 'Moda Masculina'},
  ];

  constructor(private productsSevice: ProductsService) { }

  ngOnInit(): void {

    this.productsSevice.getAll().subscribe( data => {
      this.produtcs = data
    });
  }

}
