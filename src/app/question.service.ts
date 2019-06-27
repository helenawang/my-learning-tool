import {Injectable} from '@angular/core';
import {QuestionBase} from './model/question-base';
import {QuestionTextbox} from './model/question-textbox';
import {QuestionTextarea} from './model/question-textarea';
// import {QuestionSettings} from './model/Knowledge';
import {QuestionTags} from './model/question-tags';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}
  // TODO make asynchronous
  // 工厂模式
  dynamicFormFactory(type, name, required, description) {
    switch (type) {
      case 'textbox':
        return new QuestionTextbox({ // TODO 这里有一些因名称不对应而手动实现的映射，后期是不是可以减少？让数据结构一致
          key: name, label: name,
          description: description,
          required: !!required
        });
      case 'textarea':
        return new QuestionTextarea({
          key: name, label: name,
          description: description,
          required: !!required
        });
      case 'tags':
        return new QuestionTags({
          key: name, label: name,
          description: description,
          required: !!required,
          value: []
        });
    }
  }
  private getQuestionSettings() {
    return this.http.get('http://localhost:8080/questions/all').toPromise();
  }
  getQuestionsFromSetting() {
    return this.getQuestionSettings().then((data: any[]) => {
        const questions = data.map(q => this.dynamicFormFactory(q['type'], q['name'], q['required'], q['description']));
        return questions.sort((a, b) => a.order - b.order);
    });
  }
  getQuestionValuesFromJson(json, questions: any[]) {
    const result = JSON.parse(JSON.stringify(questions)); // deep clone
    result.forEach((q) => {
      q.value = json[q.key];
    });
    return result;
  }
  updateQuestionToES(id, json) {

  }
}
