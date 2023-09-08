/* eslint-disable semi */
export default interface IBaseInput {
  fieldTitle: string;
  fieldName: string;
  type: string;
  rules: string | undefined;
  placeholder: string;
  maxlength: number | undefined;
  max: number | undefined;
  labelField: string | undefined;
}
