import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { ChartCardComponent } from './cards/chart-card/chart-card.component';
import { GreetingsComponent } from './greetings/greetings.component';
import { SimpleCardComponent } from './cards/simple-card/simple-card.component';
import { StretchCardComponent } from './cards/stretch-card/stretch-card.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ImageCardComponent } from './cards/image-card/image-card.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  exports: [
    ImageCardComponent,
    ChartCardComponent,
    SimpleCardComponent,
    GreetingsComponent,
    StretchCardComponent,
    CarouselComponent,
  ],
  declarations: [
    ImageCardComponent,
    ChartCardComponent,
    SimpleCardComponent,
    GreetingsComponent,
    StretchCardComponent,
    CarouselComponent,
  ],
  imports: [
    CommonModule,
    RouterModule, 
    FormsModule 
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class WidgetsModule { }
