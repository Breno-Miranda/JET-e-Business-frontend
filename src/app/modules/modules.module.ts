import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared
import { SharedModule } from '../shared/shared.module';

// component
import { SiteComponent } from './site/site.component';
import { ProductsComponent } from './products/products.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    SiteComponent,
    ProductsComponent,
    CheckoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ModulesModule { }
