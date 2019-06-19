export interface Knowledge {
  name: string;
  tags: string[]; // 先不做category，而把语言之类的先做成tag，后续可能会增加category
  spirit: string; // 核心思想
  background: string;
  motivation: string;
  pros: string[];
  cons: string[];
  components: string[];
  alternatives: string[]; // 此处先不展开，只记录名称，后续可增加引用
  references: string[]; // 参考资料
}
// 对于问题项的配置
export const QuestionSettings = [
  {type: 'textbox', name: 'name', required: true,
    description: '惯用名称'},
  {type: 'tags', name: 'tags',
    description: '标签（回车分隔）'},
  {type: 'textbox', name: 'spirit',
    description: '精髓'},
  {type: 'textarea', name: 'background',
    description: '这个技术出现的背景'},
  {type: 'textarea', name: 'motivation',
    description: '初衷和想要达到什么样的目标或是要解决什么样的问题'},
  {type: 'textarea', name: 'pros',
    description: '优势'},
  {type: 'textarea', name: 'cons',
    description: '劣势'},
  {type: 'textbox', name: 'components',
    description: '组成部分'},
  {type: 'textbox', name: 'alternatives',
    description: '已有的实现和它之间的对比'},
  {type: 'textarea', name: 'references',
    description: '参考文献'},
];
