// 知识点（左侧二级）
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
// 知识分类（左侧一级）
export interface KnowledgeCategory {
  name: string;
  count: number; // 分类下的知识数
  icon: string;
  // data: Knowledge[];
}
export const Categories: KnowledgeCategory[] = [
  {name: 'html', count: 10, icon: 'ant-code'},
  {name: 'css', count: 5, icon: 'ant-credit-card'},
  {name: 'javascript', count: 20, icon: 'ant-apple'}
];
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
  {type: 'tags', name: 'pros',
    description: '优势'},
  {type: 'tags', name: 'cons',
    description: '劣势'},
  {type: 'tags', name: 'components',
    description: '组成部分'},
  {type: 'tags', name: 'alternatives',
    description: '已有的实现和它之间的对比'},
  {type: 'tags', name: 'references',
    description: '参考文献'},
];
// TODO 我觉得后面几项应该设计为lists，支持回车追加一条，目前只是用tags
