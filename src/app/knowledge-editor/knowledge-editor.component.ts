import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {QuestionService} from '../question.service';

@Component({
  selector: 'app-knowledge-editor',
  templateUrl: './knowledge-editor.component.html',
  styleUrls: ['./knowledge-editor.component.css'],
  providers: [QuestionService]
})
export class KnowledgeEditorComponent implements OnInit {
  questions: any[];
  constructor(private formBuilder: FormBuilder, qs: QuestionService) {
    this.questions = QuestionService.getQuestions();
  }
  ngOnInit() {
  }
}
