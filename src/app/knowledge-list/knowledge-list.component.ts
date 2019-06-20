import { Component, OnInit } from '@angular/core';
import {Knowledge, KnowledgeCategory} from '../model/Knowledge';
// @ts-ignore
import {knowledgeLists} from './mockData.json';

@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.css']
})
export class KnowledgeListComponent implements OnInit {
  constructor() { }
  knowledgeLists: KnowledgeCategory[];
  selectedKnowledge: any; // 当前选中的knowledge
  ngOnInit() {
    this.knowledgeLists = knowledgeLists;
  }
}
