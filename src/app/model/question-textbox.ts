import {QuestionBase} from './question-base';
export class QuestionTextbox extends QuestionBase<string> {
  controlType = 'textbox';
  type: string;
  constructor(options: {} = {}) {
    super(options); // 有种在写java的错觉
    this.type = options['type'] || '';
  }
}
