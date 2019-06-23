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
  formGroup: FormGroup;
  importApproach = 0; // 哪种导入方式,0: 文件，1：粘贴
  constructor(private formBuilder: FormBuilder, qs: QuestionService) {
    this.questions = QuestionService.getQuestionsFromSetting();
  }
  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      input_textarea: ['']
    });
  }
  // 从系统中读取JSON文件
  importJSONFromFile(files) {
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.questions = QuestionService.getQuestionValuesFromJson(JSON.parse(e.target['result'])['knowledge'], this.questions);
    };
    fileReader.readAsText(file);
  }
  // 从输入框中读取JSON
  importJSONFromTextarea() {
    const value = this.formGroup.value.input_textarea;
    this.questions = QuestionService.getQuestionValuesFromJson(JSON.parse(value)['knowledge'], this.questions);
  }
}
