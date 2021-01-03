import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {


  categorys: Object | undefined;

  constructor() { }

  ngOnInit(): void {
    this.categorys = [
      {title: 'Categoria 1' , id: 1 },
      {title: 'Categoria 2' , id: 2 },
      {title: 'Categoria 3' , id: 3 }
    ];
  }

}
