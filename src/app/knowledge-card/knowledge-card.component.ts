import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Knowledge} from '../model/Knowledge';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-knowledge-card',
  templateUrl: './knowledge-card.component.html',
  styleUrls: ['./knowledge-card.component.css']
})
export class KnowledgeCardComponent implements OnInit {
  @Input()knowledge: Knowledge;
  questions = QuestionService.getQuestionsFromSetting();
  jsonKnowledge;
  state = 'displaying';
  constructor() { }
  @Output() updateKnowledge = new EventEmitter();
  ngOnInit() {
    this.jsonKnowledge = JSON.stringify(this.knowledge);
  }
  // 编辑这个knowledge
  edit() {
    console.log(this.knowledge);
    this.questions = QuestionService.getQuestionValuesFromJson(this.knowledge, this.questions);
    this.state = 'editing';
  }
  // 编辑结束，保存查看
  saving(value) {
    this.knowledge = value;
    this.jsonKnowledge = JSON.stringify(this.knowledge);
    // 目前还是得手工持久化。。。
    this.state = 'displaying';
    this.updateKnowledge.emit(this.knowledge);
  }
  // 给不同关键字的tag标不同的颜色
  getTagColor(tag) {
    if (tag.indexOf('old') > -1) {
      return 'volcano';
    } else if (tag === 'fresh') {
      return 'cyan';
    } else {
      return 'geekblue';
    }
  }
}
