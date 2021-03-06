import { Component, OnInit, Input } from '@angular/core';
import {QuestionBase} from '../model/question-base';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-dynamic-form-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {
  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  constructor() { }

  get isValid() {
    return this.form.controls[this.question.key].valid;
  }
  ngOnInit() {
  }

}
