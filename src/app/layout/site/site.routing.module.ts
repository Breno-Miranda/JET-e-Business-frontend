import { Routes } from '@angular/router';

import { SiteComponent } from '../../modules/site/site.component';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { CheckoutComponent } from 'src/app/modules/checkout/checkout.component';
import { ClientsComponent } from 'src/app/modules/clients/clients.component';
import { OrdersComponent } from 'src/app/modules/orders/orders.component';


export const SiteRoutes: Routes = [
  {path: '', component: SiteComponent},
  {path: 'produtos', component: ProductsComponent},
  {path: 'produtos/:id/details', component: ProductsComponent},
  {path: 'carrinho', component: CheckoutComponent},
  {path: 'clientes', component: ClientsComponent},
  {path: 'ordem', component: OrdersComponent},
  {path: 'ordem/:id/details', component: OrdersComponent},
];


