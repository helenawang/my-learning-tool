import {Injectable} from '@angular/core';
import {QuestionBase} from './model/question-base';
import {QuestionTextbox} from './model/question-textbox';
import {QuestionTextarea} from './model/question-textarea';
import {QuestionSettings} from './model/Knowledge';
import {QuestionTags} from './model/question-tags';

@Injectable()
export class QuestionService {
  // TODO get from a remote source of question metadata
  // TODO make asynchronous
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
  static getQuestionsFromSetting() {
    const questions: QuestionBase<any>[] = QuestionSettings.map((q) => this.dynamicFormFactory(q.type, q.name, q.required, q.description));
    return questions.sort((a, b) => a.order - b.order);
  }
  static getQuestionValuesFromJson(json, questions: any[]) {
    const result = JSON.parse(JSON.stringify(questions)); // deep clone
    result.forEach((q) => {
      q.value = json[q.key];
    });
    return result;
  }
}
