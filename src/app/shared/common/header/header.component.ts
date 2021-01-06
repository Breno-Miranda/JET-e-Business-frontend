import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  cart$: Observable<string[]>;
  dataCart!: any; 
  
  constructor(
    private store: Store<{ cart: string[] }>,
  ) { 
    this.cart$ = this.store.select(state => state.cart);
    this.cart$.subscribe(res => this.dataCart = res);
  }

  ngOnInit(): void {}
}
