import { Component, OnInit } from '@angular/core';

//Services 
import { CategorysService } from 'src/app/services/categorys.service';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  categorys: any = {};

  constructor(private categoryServices: CategorysService ) { }

  isloading=true;

  ngOnInit(): void {
    // categorys services
    this.categoryServices.getAll().then( data => {
      this.isloading=false;
      this.categorys = data
    });
  }

}
