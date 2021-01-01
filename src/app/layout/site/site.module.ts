import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


// Components

import { SiteComponent } from '../../modules/site/site.component';

// Router 
import { SiteRoutes } from './site.routing.module';

@NgModule({
  declarations: [
    SiteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SiteRoutes),
  ]
})


export class SiteModule { }
