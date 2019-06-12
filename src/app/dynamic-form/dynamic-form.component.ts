import { Component, OnInit, Input } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {QuestionBase} from '../model/question-base';
import {QuestionControlService} from '../question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
  providers: [QuestionControlService]
})
export class DynamicFormComponent implements OnInit {
  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';
  constructor(private qcs: QuestionControlService) { }

  ngOnInit() {
    this.form = this.qcs.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
    // TODO 暂时只当个JSON生成器来用啦，生成后手动复制粘贴到一个位置，手动实现持久化。
  }
}
