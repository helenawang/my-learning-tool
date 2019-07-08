import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import {QuestionService} from '../question.service';
import {Categories, KnowledgeCategory} from '../model/Knowledge';

@Component({
  selector: 'app-knowledge-editor',
  templateUrl: './knowledge-editor.component.html',
  styleUrls: ['./knowledge-editor.component.css'],
  providers: [QuestionService]
})
export class KnowledgeEditorComponent implements OnInit {
  questions = [];
  formGroup: FormGroup;
  categories: KnowledgeCategory[];
  chosenCategory: KnowledgeCategory;
  compareFn = (o1, o2) => o1 && o2 && o1.name === o2.name;

  // 哪种导入方式,0: 文件，1：粘贴
  constructor(private formBuilder: FormBuilder, private qs: QuestionService) {
  }
  ngOnInit() {
    this.categories = Categories;
    this.qs.getQuestionsFromSetting().then(data => {
      this.questions = data;
    });
    this.formGroup = this.formBuilder.group({
      input_textarea: ['']
    });
  }
  // 从系统中读取JSON文件
  importJSONFromFile(files) {
    const file = files[0];
    const fileReader = new FileReader();
    fileReader.onload = (e) => {
      this.questions = this.qs.getQuestionValuesFromJson(JSON.parse(e.target['result'])['knowledge'], this.questions);
    };
    fileReader.readAsText(file);
  }
  // 从输入框中读取JSON
  importJSONFromTextarea() {
    const value = this.formGroup.value.input_textarea;
    this.questions = this.qs.getQuestionValuesFromJson(JSON.parse(value), this.questions);
  }

  addKnowledge(knowledge: any) {
    this.qs.addNewKnowledgeToES(this.chosenCategory, knowledge).then((res) => {}, (err) => {
      console.log(err);
    });
  }
}
