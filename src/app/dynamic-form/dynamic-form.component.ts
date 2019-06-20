import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../model/question-base';
import {QuestionControlService} from '../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent {
  _questions: QuestionBase<any>[] = [];
  @Input() set questions(q) {
    this._questions = q;
    this.form = this.qcs.toFormGroup(this._questions);
  }
  @Output() saving = new EventEmitter();
  get questions() { // TODO questions和form.value的区别
    return this._questions;
  }
  form: FormGroup;
  payLoad = '';
  constructor(private qcs: QuestionControlService) { }
  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    // TODO 暂时只当个JSON生成器来用啦，生成后手动复制粘贴到一个位置，手动实现持久化。
    this.saving.emit(this.form.value);
  }
}
