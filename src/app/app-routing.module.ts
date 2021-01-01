import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

// adding the layout

import {SiteComponent} from './layout/site/site.component';

const routes: Routes = [
  {
    path: '', component: SiteComponent, canActivate: [],
    children: [
      { path: '', loadChildren: './layout/site/site.module#SiteModule' }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
