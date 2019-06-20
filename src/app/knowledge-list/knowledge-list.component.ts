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
  updateKnowledge(newK) {
    console.log(newK);
    // TODO 此处应把selectedKnowledge所指向的那个knowledge更新为最新版，但这涉及了更新策略的问题，我们是完全覆盖，还是记录变化？我倾向于后者，不过感觉坑会不小。。。
  }
}
