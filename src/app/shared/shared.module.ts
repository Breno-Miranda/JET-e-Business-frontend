
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';


@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class SharedModule { }