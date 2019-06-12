import { Component, OnInit } from '@angular/core';
import {Knowledge} from '../model/Knowledge';
// @ts-ignore
import {knowledgeList} from './mockData.json';

@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.css']
})
export class KnowledgeListComponent implements OnInit {
  knowledgeList: Knowledge[];
  constructor() { }

  ngOnInit() {
    this.knowledgeList = knowledgeList;
  }

}
