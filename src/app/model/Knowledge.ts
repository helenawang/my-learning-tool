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
