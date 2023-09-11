import IDropdownOption from './IDropdownOption';

export default interface IDropdownInput {
  fieldTitle: string;
  fieldName: string;
  placeholder: string | undefined;
  optionList: Array<IDropdownOption>;
  selectedOption: IDropdownOption | undefined;
};
