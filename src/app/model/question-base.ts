export class QuestionBase<T> {
  value: T;
  description?: string;
  key: string;
  label: string;
  required: boolean;
  order: number; // TODO?
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
    this.key = options.key || '';
    this.label = options.label;
    this.required = !!options.required; // 默认为false
    this.order = options.order === undefined ? 1 : options.order; // 未指定则为1，相当于抢占优先级？
    this.controlType = options.controlType || '';
  }
}
