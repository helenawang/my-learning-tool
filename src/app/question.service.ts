import {Injectable} from '@angular/core';
import {QuestionTextbox} from './model/question-textbox';
import {QuestionTextarea} from './model/question-textarea';
import {QuestionTags} from './model/question-tags';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {
  constructor(private http: HttpClient) {}
  // 工厂模式
  static dynamicFormFactory(type, name, required, description) {
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

  private constructQuestions(data) {
    return  data
      .map(q => QuestionService.dynamicFormFactory(q['type'], q['name'], q['required'], q['description']))
      .sort((a, b) => a.order - b.order);
  }
  // I appreciate this function, elegant and clear
  async getQuestionsFromSetting() {
    const result = await this.http.get('http://localhost:8080/questions/all').toPromise();
    return this.constructQuestions(result);
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
