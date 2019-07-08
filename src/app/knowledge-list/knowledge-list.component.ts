import { Component, OnInit } from '@angular/core';
import {Categories, Knowledge, KnowledgeCategory} from '../model/Knowledge';
import {QuestionService} from '../question.service';
import {HttpClient, HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-knowledge-list',
  templateUrl: './knowledge-list.component.html',
  styleUrls: ['./knowledge-list.component.css'],
  providers: [QuestionService]
})
export class KnowledgeListComponent implements OnInit {
  constructor(private qs: QuestionService, private http: HttpClient) { }
  categoryList = Categories; // 左侧导航的category list
  knowledgeList = []; // 选中category的knowledge list
  selectedCategory: KnowledgeCategory; // 选中的category，只展开这一级
  selectedKnowledge: any; // 选中的knowledge
  ngOnInit() {
  }
  // 更新已有文档
  updateKnowledge(updateK: Knowledge) {
    this.qs.updateKnowledgeToES(this.selectedCategory, updateK).then((result: any) => {
    }, (err) => {
      console.error('elasticsearch update error');
    });
  }

  // 获取指定category下的所有文档
  selectCategory(category: KnowledgeCategory) {
    this.selectedCategory = category;
    this.qs.getAllDocsOfIndex(category).then((result: any[]) => {
      this.knowledgeList = result;
    }, (err) => {
      console.error('elasticsearch search error');
    });
  }
}
