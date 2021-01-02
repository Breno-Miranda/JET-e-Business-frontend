import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// shared
import { SharedModule } from '../shared/shared.module';

// component
import { SiteComponent } from './site/site.component';

@NgModule({
  declarations: [
    SiteComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ModulesModule { }
