export class QuestionBase<T> { // 第一次使用泛型，excited!
  value: T;
  description?: string;
  key: string;
  label: string;
  required: boolean;
  order: number; // ?
  controlType: string;
  constructor(options: {
    value?: T,
    description?: string,
    key?: string,
    label?: string,
    required?: boolean,
    order?: number,
    controlType?: string
  } = {}) {
    this.value = options.value;
    this.description = options.description;
    this.key = options.key || ''; // 我果然是学了数组解构赋值后，什么赋值都想这么用，然而那未必是best practice
    this.label = options.label;
    this.required = !!options.required; // TODO 为什么要这么赋值？
    this.order = options.order === undefined ? 1 : options.order; // 未指定则为1，why?
    this.controlType = options.controlType || '';
  }
}
