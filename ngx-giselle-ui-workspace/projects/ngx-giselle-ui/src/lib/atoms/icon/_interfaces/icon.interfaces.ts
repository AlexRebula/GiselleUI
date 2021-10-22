import {
    IFontAwesomeIconEnum,
    IButtonIconSizeEnum,
} from './../../button/_interfaces/button.enums';
export interface IICon {
    name: IFontAwesomeIconEnum;
    size?: IButtonIconSizeEnum;
    rotate?: number;
    flip?: 'horizontal' | 'vertical' | 'both';
    spin?: boolean;
    pulse?: boolean;
    border?: boolean;
    pull?: 'left' | 'right';
    styles?: any;
}
