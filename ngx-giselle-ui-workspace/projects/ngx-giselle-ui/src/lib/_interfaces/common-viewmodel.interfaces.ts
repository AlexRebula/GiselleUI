import { ICard } from '../organisms/card/_interfaces/card.interfaces';
import { IMenuList } from '../templates/menu-template/_interfaces/menu.interfaces';
import {
    IMainAudienceEnum,
    IOrganisationStatusEnum,
    IPolicyAndAdvocacyActivityNameEnum,
    IResourceActivityEnum,
    ITrainingEnum,
    IYesNoEnum,
} from './common.enums';
import { ICountryEnum } from './geography.enums';

export interface IOrganisation {
    id: string;
    card: ICard;
    name?: string;
    description?: string;
    websiteURL?: string;
    status?: IOrganisationStatusEnum;
    country?: ICountryEnum;
    address?: string;
    lat: number;
    lon: number;

    primaryFocusAreas: string;
    mainAudience: IMainAudienceEnum[];
    doTheyConductTrainings: string;
    typesOfTraining: string[];

    resourcesByTopic: string[];

    trainings: ITrainingEnum[];
    stakeholdersFundingModel: string;
    stakeholdersMembers?: string[];
    stakeholdersOverlapWithOurMembers?: string;
    doTheyUndertakePolicyAdvocacyActivities?: IYesNoEnum;
    policyAndAdvocacyActivities?: IYesNoEnum;
    policyAndAdvocacyActivityTypes?: IPolicyAndAdvocacyActivityNameEnum[];
    menuLists?: IMenuList[];
    activities?: any;
    verified?: boolean;
    thumbnail?: string;
}

export interface IActivity {
    name: IResourceActivityEnum;
    isConducted: IYesNoEnum;
}
export enum IUIModeEnum {
    copy = 'copy',
    read = 'read',
    update = 'update',
    delete = 'delete',
}
export interface IOption {
    id: string;
    value: any;
    displayValue: any;
}
