import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class ModulesModule { }
