import {Injectable} from '@angular/core';
import {QuestionBase} from './model/question-base';
import {QuestionDropdown} from './model/question-dropdown';
import {QuestionTextbox} from './model/question-textbox';
import {QuestionTextarea} from './model/question-textarea';

@Injectable()
export class QuestionService {
  // TODO get from a remote source of question metadata
  // TODO make asynchronous
  static getQuestions() {
    const nameTextbox = new QuestionTextbox({
      key: 'name',
      label: 'name',
      required: true
    });
    const tagsTextbox = new QuestionTextbox({
      key: 'tags',
      label: 'tags',
    });
    const spiritTextbox = new QuestionTextbox({
      key: 'spirit',
      label: 'spirit'
    });
    const background = new QuestionTextarea({
      key: 'background',
      label: 'background'
    });
    const motivation = new QuestionTextarea({
      key: 'motivation',
      label: 'motivation'
    }); // TODO 我觉得这种最好做成列表式输入
    const pros = new QuestionTextarea({
      key: 'pros',
      label: 'pros'
    });
    const cons = new QuestionTextarea({
      key: 'cons',
      label: 'cons'
    });
    const components = new QuestionTextbox({
      key: 'components',
      label: 'components'
    });
    const alternatives = new QuestionTextbox({
      key: 'alternatives',
      label: 'alternatives'
    });
    const references = new QuestionTextarea({
      key: 'references',
      label: 'references'
    });
    const questions: QuestionBase<any>[] = [
      nameTextbox,
      tagsTextbox,
      spiritTextbox,
      background,
      motivation,
      pros,
      cons,
      components,
      alternatives,
      references
      // new QuestionDropdown({
      //   key: 'brave',
      //   label: 'Bravery Rating',
      //   options: [
      //     {key: 'solid',  value: 'Solid'},
      //     {key: 'great',  value: 'Great'},
      //     {key: 'good',   value: 'Good'},
      //     {key: 'unproven', value: 'Unproven'}
      //   ],
      //   order: 3
      // }),
    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
