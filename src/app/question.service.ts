import {Injectable} from '@angular/core';
import {QuestionTextbox} from './model/question-textbox';
import {QuestionTextarea} from './model/question-textarea';
import {QuestionTags} from './model/question-tags';
import { HttpClient, HttpParams } from '@angular/common/http';
import {DEBUG_BASE_URL, RELEASE_BASE_URL} from './config/url';

@Injectable()
export class QuestionService {
  // private baseURL = RELEASE_BASE_URL;
  private baseURL = DEBUG_BASE_URL;
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
    const result = await this.http.get(`${this.baseURL}/questions/all`).toPromise();
    return this.constructQuestions(result);
  }
  getQuestionValuesFromJson(json, questions: any[]) {
    const result = JSON.parse(JSON.stringify(questions)); // deep clone
    result.forEach((q) => {
      q.value = json[q.key];
    });
    return result;
  }
  /* 所有index都加上knowledge-前缀，便于kibana创建index-pattern*/
  // 把已有doc的更新写入Elasticsearch
  updateKnowledgeToES(category, updateK) {
    const options = {params: new HttpParams().set('category', `knowledge-${category.name}`).set('docId', updateK.docId)}; // 此时是更新文档，必然已有id
    return this.http.post(`${this.baseURL}/knowledge/update`, updateK, options).toPromise();
    // TODO 目前只在es保存最新版本，及版本号，不保留历史版本
  }
  // 获取category下的所有doc
  getAllDocsOfIndex(category) {
    const options = category ? { params: new HttpParams().set('category', `knowledge-${category.name}`) } : {}; // 设置参数
    return this.http.get(`${this.baseURL}/knowledge/list`, options).toPromise();
  }
  // 往指定category里添加新doc
  // docId是elasticsearch自动生成的，并且只有更新一次后才会同步到_source里的docId字段。暂时没什么危害
  addNewKnowledgeToES(category, newK) {
    const options = {params: new HttpParams().set('category', `knowledge-${category.name}`)};
    return this.http.post(`${this.baseURL}/knowledge/add`, newK, options).toPromise();
  }
}
