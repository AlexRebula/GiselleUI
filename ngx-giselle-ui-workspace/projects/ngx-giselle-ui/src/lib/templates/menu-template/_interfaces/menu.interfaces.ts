export interface IMenuList {
    label?: string;
    items: IMenuItem[];
    lists?: IMenuList[];
}

export interface IMenuItem {
    text: string;
    isActive?: boolean;
    list?: IMenuList;
}
