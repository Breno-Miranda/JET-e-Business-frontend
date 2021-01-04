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

  constructor(private productsSevice: ProductsService) { }

  ngOnInit(): void {

    this.productsSevice.getAll().subscribe( data => {
      this.produtcs = data
    });
  }

}
