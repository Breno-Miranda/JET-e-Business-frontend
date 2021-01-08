import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

// action
import { Clear } from 'src/app/shared/models/actions/cart.types.action';
import { cAdd } from 'src/app/shared/models/actions/client.types.action';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  cart$!: Observable<string[]>;
  client$!: Observable<string[]>;

  dataCart: any; 
  dataClient: any; 

  model: any = {}; 

  submitted = false;

  constructor(
    private store: Store<{ cart: string[], client: string[] }>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cart$ = this.store.select(state => state.cart);
    this.cart$.subscribe(res => this.dataCart = res);
  }

  async Clear() {
    this.store.dispatch(Clear());
    this.router.navigate(['/#']);
  }


  onSubmit(){
    this.submitted = true;
    if(this.model.name && this.model.email && this.model.phone){
      this.store.dispatch(cAdd(this.model));
      this.router.navigate(['/ordem']);
    } else {
      alert('Preencha seus dados, todos são obrigatórios.');
    }
  }
}