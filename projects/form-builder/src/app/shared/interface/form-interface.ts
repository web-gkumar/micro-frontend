
export interface IForm {
  formName: string;
  formicon: string;
  isFormCreations: boolean;
  gridUpdateMode: boolean;
  pojo: string;
  isPopup: boolean;
  isImport: boolean;
  isPDFDownload: boolean;
  gridButtons: any[];
  formsButtons: FormsButton[];
  formControls: FormControl[];
}

export interface FormControl {
  fieldIcons: string;
  name: string;
  label: string;
  value?: string;
  placeholder?: string;
  class: string;
  disabled: boolean;
  hideGridFields: boolean;
  isShowIf: boolean;
  showField: string;
  showFieldItems: string;
  hideFieldOnConditions: boolean;
  type: string;
  validators: IValidator[];
  formate?: string;
  values?: any[];
  btnclass?: string;
  isMandatory: boolean;
}
export interface IValidator {
  validatorName: string;
  required: boolean;
  message: string;
  minLength?: number;
  maxLength?: number;
  pattern?: string;
}
export interface FormsButton {
  btnname: string;
  btnicon: string;
  useto: string;
  isdisabled: boolean;
}
