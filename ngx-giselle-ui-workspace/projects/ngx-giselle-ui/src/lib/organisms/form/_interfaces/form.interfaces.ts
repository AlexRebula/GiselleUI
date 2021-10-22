import { IFormFieldTypeEnum } from '../../../molecules/form-field/_interfaces/form-field.interface';

export interface IFormSection {
    title: string;
    fields: IFormField[];
}

export interface IFormField {
    id: string | undefined;
    type?: IFormFieldTypeEnum | undefined;
    label: string | undefined;
    value: string | undefined;
    readOnly?: boolean | undefined;
    options?: string[];
}
