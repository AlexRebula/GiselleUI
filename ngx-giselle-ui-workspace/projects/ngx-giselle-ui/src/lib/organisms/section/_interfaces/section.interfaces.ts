export interface ISection {
    size?: ISectionSizeEnum | undefined;
    type?: ISectionTypeEnum | undefined;
    color?: IHeroColorEnum | undefined;
    title: string | undefined;
    subtitle?: string | undefined;
    content?: string | undefined;
    hasTextCentered?: boolean | undefined;
}

export enum ISectionSizeEnum {
    large = 'large',
    medium = 'medium',
}

export enum ISectionTypeEnum {
    hero = 'hero',
}

export enum IHeroColorEnum {
    primary = 'primary',
    link = 'link',
    success = 'success',
    danger = 'danger',
    info = 'info',
    warning = 'warning',
}
