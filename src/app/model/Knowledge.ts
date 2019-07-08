// 知识点（左侧二级）
export interface Knowledge {
  name: string;
  tags: string[]; // 先不做category，而把语言之类的先做成tag，后续可能会增加category
  spirit: string;
  background: string;
  motivation: string;
  pros: string[];
  cons: string[];
  components: string[];
  alternatives: string[]; // 此处先不展开，只记录名称，后续可增加引用
  references: string[]; // 参考资料
  docId?: string; // 写入es时自动生成的
}
// 知识分类（左侧一级）
export interface KnowledgeCategory {
  name: string;
  count: number; // 分类下的知识数
  icon: string;
}
// TODO 现在分类是写死在前端的
export const Categories: KnowledgeCategory[] = [
  {name: 'html', count: 10, icon: 'html5'},
  {name: 'css', count: 5, icon: 'layout'},
  {name: 'javascript', count: 20, icon: 'interaction'},
  {name: 'browser', count: 20, icon: 'chrome'}
];
// TODO 我觉得后面几项question应该设计为lists，支持回车追加一条，目前只是用tags
