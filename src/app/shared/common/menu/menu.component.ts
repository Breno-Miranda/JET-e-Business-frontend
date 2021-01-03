import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  data = [];

  @Input() Data: any;

  constructor() { }

  ngOnInit(): void {
    this.data = this.Data;
  }

}
