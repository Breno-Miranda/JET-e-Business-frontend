import { Routes } from '@angular/router';

import { SiteComponent } from '../../modules/site/site.component';
import { ProductsComponent } from 'src/app/modules/products/products.component';
import { CheckoutComponent } from 'src/app/modules/checkout/checkout.component';


export const SiteRoutes: Routes = [
  {path: '', component: SiteComponent},
  {path: 'produtos', component: ProductsComponent},
  {path: 'carrinho', component: CheckoutComponent},
];


