import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  data: any;

  @Input() Query: any;

  constructor() { }

  ngOnInit(): void {
    this.data = this.Query;
  }

}
