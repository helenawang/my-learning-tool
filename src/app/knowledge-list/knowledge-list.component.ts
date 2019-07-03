import { Component, OnInit } from '@angular/core';
import {Categories, Knowledge, KnowledgeCategory} from '../model/Knowledge';
// @ts-ignore
import {knowledgeLists} from './mockData.json';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.css'],
  providers: [QuestionService]
})
export class KnowledgeListComponent implements OnInit {
  constructor(private qs: QuestionService) { }
  categoryList = Categories; // 左侧导航的category list
  knowledgeList = []; // 选中category的knowledge list
  selectedCategory: KnowledgeCategory; // 选中的category，只展开这一级
  selectedKnowledge: any; // 选中的knowledge
  ngOnInit() {
  }
  updateKnowledge(newK) {
    console.log(newK);
    // TODO 此处应把selectedKnowledge所指向的那个knowledge更新为最新版，但这涉及了更新策略的问题，我们是完全覆盖，还是记录变化？我倾向于后者，不过感觉坑会不小。。。
    // QuestionService.updateQuestionToES(5, newK);
  }

  selectCategory(category: KnowledgeCategory) {
    this.selectedCategory = category;
    // TODO 从es中查找以category为名字的index的所有文档，填充到knowledgeList里
    const filterResult = knowledgeLists.filter(kl => kl.category === category.name)[0];
    this.knowledgeList = filterResult ? filterResult['data'] : [];
  }
}
