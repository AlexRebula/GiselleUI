import { ISection } from '../../section/_interfaces/section.interfaces';
import { IOrganisation } from './../../../_interfaces/common-viewmodel.interfaces';

export interface IOrganisationList {
    items: IOrganisation[];
    mode?: string | undefined;
    section: ISection | undefined;
}
