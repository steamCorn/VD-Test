export default class PropsClass {
  fieldTitle: string;
  fieldName: string;
  rules: string;

  constructor(
    fieldTitle: string,
    fieldName: string,
    rules: string,
  ) {
    this.fieldTitle = fieldTitle;
    this.fieldName = fieldName;
    this.rules = rules;
  }
}
