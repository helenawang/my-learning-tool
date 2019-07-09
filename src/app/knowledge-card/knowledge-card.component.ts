import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Knowledge} from '../model/Knowledge';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-knowledge-card',
  templateUrl: './knowledge-card.component.html',
  styleUrls: ['./knowledge-card.component.css'],
  providers: [QuestionService]
})
export class KnowledgeCardComponent implements OnInit {
  _knowledge: Knowledge;
  @Input() set knowledge(k) {
    this._knowledge = k;
    this.jsonKnowledge = JSON.stringify(k);
  }
  get knowledge() {
    return this._knowledge;
  }
  questions;
  jsonKnowledge;
  state = 'displaying';
  constructor(private qs: QuestionService) { }
  @Output() updateKnowledge = new EventEmitter();
  ngOnInit() {
    this.qs.getQuestionsFromSetting().then(data => {
      this.questions = data;
    });
  }
  // 编辑这个knowledge
  edit() {
    this.questions = this.qs.getQuestionValuesFromJson(this.knowledge, this.questions);
    this.state = 'editing';
  }
  // 编辑结束，保存查看 TODO 左侧栏在编辑模式下是否该禁用，还是试图切换时提示是否保存or暂存？
  saving(value) {
    Object.assign(this.knowledge, value); // 把docId保留下来，注意上层需要判断是否是初次创建而选择保留/去掉docId
    this.jsonKnowledge = JSON.stringify(this.knowledge);
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
