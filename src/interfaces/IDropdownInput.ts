interface IDropdownInput {
  fieldTitle: string;
  fieldName: string;
  placeholder: string | undefined;
  optionList: string[];
  selectedOption: string;
  isScrollable: boolean;
}

export default IDropdownInput;
