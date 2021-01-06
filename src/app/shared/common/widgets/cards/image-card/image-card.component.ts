import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// types-actions
import { Add } from 'src/app/shared/models/actions/types.action';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  data = {
    title: '',
    price: '',
    url_image: '',
    description: '',
  };

  @Input() Data: any;
  
  cart$: Observable<string[]>;

  constructor(
    private store: Store<{ cart: string[] }>,
  ) { 
    this.cart$ = this.store.select(state => state.cart);
    console.log(this.cart$);
  }

  ngOnInit(): void {
    this.data = this.Data;
  }

  async add(product: any) {
    this.store.dispatch(Add(product));
  }
}
