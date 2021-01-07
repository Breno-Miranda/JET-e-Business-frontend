import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  cart$!: Observable<string[]>;
  dataCart: any; 
  model: any = {}; 

  submitted = false;

  constructor(
    private store: Store<{ cart: string[] }>,
  ) { }

  ngOnInit(): void {
    this.cart$ = this.store.select(state => state.cart);
    this.cart$.subscribe(res => this.dataCart = res);
  }

  onSubmit(){

    this.submitted = true;
    
    alert('oi')
  }

}
