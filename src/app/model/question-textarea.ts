import {QuestionBase} from './question-base';
export class QuestionTextarea extends QuestionBase<string> {
  controlType = 'textarea';
  type: string;
  constructor(options: {} = {}) {
    super(options);
  }
}
