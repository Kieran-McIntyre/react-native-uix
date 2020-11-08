export type IFieldType = "string" | "select" | "textarea" | "html";

export interface Field {
  id: string;
  type: IFieldType;
  placeholder?: string;
  hidden?: boolean;
  route?: string;
  labelKey?: string;
  labelValue?: string;
  params?: object;
}

export interface Section {
  id: string;
  hidden?: boolean;
  fields: Field[];
}

interface IForm {
  required: {
    [id: string]: boolean;
  };
  sections: Section[];
}

export default IForm;
