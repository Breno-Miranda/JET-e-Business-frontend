import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// types-actions
import { Add } from 'src/app/shared/models/actions/types.action';
import { ProductModel } from 'src/app/shared/models/product.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  @Input() data = {} as ProductModel;

  constructor(
    private store: Store<{ cart: string[] }>,
  ) {  }

  ngOnInit(): void {
  }

  async add(product: any) {
    this.store.dispatch(Add(product));
  }
}
