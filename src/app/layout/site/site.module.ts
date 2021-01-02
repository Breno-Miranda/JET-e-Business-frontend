import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


// Components
import { SiteComponent } from 'src/app/modules/site/site.component';

// Router 
import { SiteRoutes } from './site.routing.module';


@NgModule({
  declarations: [
    SiteComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SiteRoutes),
    NgbModule,
  ]
})


export class SiteModule { }
