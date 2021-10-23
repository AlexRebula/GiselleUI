import { ICountryEnum } from './../../_interfaces/geography.enums';
import { ISectionSizeEnum } from './../../organisms/section/_interfaces/section.interfaces';
import { IOrganisationList } from '../../organisms/list/_interfaces/list.interfaces';
import { ISearchBarConfig } from '../../organisms/search-bar/_interfaces/search-bar.interfaces';
import {
    IHeroColorEnum,
    ISection,
} from '../../organisms/section/_interfaces/section.interfaces';

export interface ILandingPageConfig {
    heroBanner?: ISection;
    map: IMap;
    sections: ISection[];
    searchBar?: ISearchBarConfig;
    list?: IOrganisationList;
    overviewMatrix?: IOverviewMatrix;
}

export interface IOverviewMatrix {
    matrixHeaders: string;
    sectionColor?: IHeroColorEnum;
    defaultColumns?: any[];
    items?: any[];
    sectionSize?: ISectionSizeEnum;
    section?: ISection;
}

export interface IMap {
    countryCoordinates: any | undefined;
    country: ICountryEnum | undefined;
}
