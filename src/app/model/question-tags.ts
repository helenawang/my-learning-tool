import {QuestionBase} from './question-base';
export class QuestionTags extends QuestionBase<string[]> {
  controlType = 'tags';
  options: {key: string, value: string[]}[] = [];
  constructor(options: {} = {}) {
    super(options);
    this.options = options['options'] || [];
  }
}
