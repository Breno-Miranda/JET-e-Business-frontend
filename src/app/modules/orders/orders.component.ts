import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// action
import { Clear } from 'src/app/shared/models/actions/cart.types.action';
import { cClear } from 'src/app/shared/models/actions/client.types.action';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  cart$!: Observable<string[]>;
  client$!: Observable<string[]>;

  dataCart: any; 
  dataClient: any; 

  constructor(
    private store: Store<{ cart: string[], client: string[] }>,
    private router: Router
  ) { }

  ngOnInit(): void {
    // 
    this.cart$ = this.store.select(state => state.cart);
    this.cart$.subscribe(res => this.dataCart = res);
    // 
    this.client$ = this.store.select(state => state.client);
    this.client$.subscribe(res => this.dataClient = res);
  }

  async Clear() {
    this.store.dispatch(Clear());
    this.store.dispatch(cClear());
    this.router.navigate(['/#']);
  }

  async Finalize(){
    this.store.dispatch(cClear());
    this.store.dispatch(Clear());
    if (confirm("Estou habito para vaga ?")) {
      window.open('https://api.whatsapp.com/send?phone=+5584988330532&text=Parabéns, estamos felizes por ter voce no nosso time.', '_blank');
       this.router.navigate(['/#']);
    } else {
      alert("Sem problemas. Obrigado pela oportunidade.");
       this.router.navigate(['/#']);
    }
  }
}