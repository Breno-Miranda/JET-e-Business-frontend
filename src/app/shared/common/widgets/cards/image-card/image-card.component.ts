import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { increment } from 'src/app/shared/models/actions/cart.action';
import { Add } from 'src/app/shared/models/actions/types.action';
import { CartModel } from 'src/app/shared/models/cart.model';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css']
})
export class ImageCardComponent implements OnInit {

  data = {
    title: '',
    url_image: '',
    description: '',
    price: ''
  };

  @Input() Data: any;
  
  count$: Observable<number>;

  constructor(
    private store: Store<{ count: number }>,

  ) { 

    this.count$ = store.select('count');

  }

  ngOnInit(): void {
    this.data = this.Data;
   
  }


  async add(product: any) {
    this.store.dispatch(increment());
      // this.store.dispatch(Add(product));
  }

}
