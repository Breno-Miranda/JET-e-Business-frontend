import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  data = [
    {title: 'Categoria 1' , id: 1 },
    {title: 'Categoria 2' , id: 2 },
    {title: 'Categoria 3' , id: 3 },
  ];

  @Input() Data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = this.Data;
  }

}
