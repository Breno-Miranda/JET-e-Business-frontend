
import { NgModule , NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

// common
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';

// widgets
import { CarouselComponent } from './common/widgets/carousel/carousel.component';
import { MenuComponent } from './common/menu/menu.component';

// Modules
import { WidgetsModule } from './common/widgets/widgets.module';


@NgModule({
  exports: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    WidgetsModule,
    CommonModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    MenuComponent,
  ],
  imports: [
    CommonModule,
    WidgetsModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})

export class SharedModule { }