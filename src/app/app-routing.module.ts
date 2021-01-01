import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import {SiteComponent} from './layout/site/site.component';

const routes: Routes = [
  {
    path: '', component: SiteComponent,
    children: [
      { path: '', loadChildren:  () => import('src/app/layout/site/site.module').then(m => m.SiteModule)}
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
