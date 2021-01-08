import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// action
import { ProductModel } from 'src/app/shared/models/product.model';
import { Clear, Recount, Remove } from 'src/app/shared/models/actions/cart.types.action';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart$: Observable<ProductModel[]> | undefined;

  dataCart: any;

  amountCheck = new Array(101);

  constructor(
    private store: Store<{ cart: ProductModel[] }>,
    private router: Router
  ) {

  }

  ngOnInit(): void {
    this.Reload();
  }

  async Remove(product: any) {
    this.store.dispatch(Remove(product));
  }

  async Reload() {
    this.cart$ = this.store.select(state => state.cart);
    this.cart$.subscribe(res => this.dataCart = res);

    /* TODO: OBS - Isto foi uma forma de contornar rapidamente o "Auto freezing" do state do objeto (redux). Isto acontece
       por questão de garantia a integridade dos dados para que não sofram ações de modificações. 
    */  
    this.dataCart = Object.assign({}, this.dataCart);
    this.dataCart = JSON.parse(JSON.stringify(this.dataCart));
    console.log(this.dataCart);
  }

  async Clear() {
    this.store.dispatch(Clear());
    this.router.navigate(['/#']);
  }

  async Recount() {
    this.store.dispatch(Recount(this.dataCart));

    /* TODO: OBS - Isto foi uma forma de contornar rapidamente o "Auto freezing" do state do objeto (redux). Isto acontece
       por questão de garantia a integridade dos dados para que não sofram ações de modificações. 
    */
    this.Reload();
  }
}
