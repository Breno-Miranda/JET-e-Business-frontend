
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// common
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

// widgets
import { CarouselComponent } from './common/widgets/carousel/carousel.component';
import { MenuComponent } from './common/menu/menu.component';


@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    MenuComponent
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class SharedModule { }