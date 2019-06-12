import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-virtual-table',
  templateUrl: './virtual-table.component.html',
  styleUrls: ['./virtual-table.component.css']
})
export class VirtualTableComponent implements OnInit {

  constructor() { }

  title = 'virtual-table';
  ngOnInit() {
    console.log($('#virtual-table').text());
  }

}
