import { IFormSection } from '../../../organisms/form/_interfaces/form.interfaces';
import { IMenuList } from '../../menu-template/_interfaces/menu.interfaces';
import { IOverviewMatrix } from '../../_interfaces/landing-page.interfaces';
import { ISection } from './../../../organisms/section/_interfaces/section.interfaces';
export interface IDetails {
    id: string;
    heroBanner?: ISection;
    formSections: IFormSection[];
    alwaysExpanded?: boolean | undefined;
    menuLists?: IMenuList[] | undefined;
    overviewMatrix?: IOverviewMatrix;
}
