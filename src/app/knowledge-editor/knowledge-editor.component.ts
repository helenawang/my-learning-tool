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
  fileList: [] = [];
  constructor(private formBuilder: FormBuilder, qs: QuestionService) {
    this.questions = QuestionService.getQuestionsFromSetting();
  }
  ngOnInit() {
  }
  importJSON(files) {
    // 从系统中读取JSON文件
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.questions = QuestionService.getQuestionValuesFromJson(JSON.parse(e.target['result'])['knowledgeList'][0], this.questions);
    };
    fileReader.readAsText(file);
  }
}
