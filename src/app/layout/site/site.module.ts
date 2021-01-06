import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Router 
import { SiteRoutes } from './site.routing.module';

// module
import { ModulesModule } from 'src/app/modules/modules.module';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SiteRoutes),
    NgbModule,
    ModulesModule,
    FormsModule,
  ]
})


export class SiteModule { }
