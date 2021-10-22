import { IMenuList } from './../../../../../../../POC/cmhaa/src/app/components/templates/menu/_interfaces/menu.interfaces';
import { ICard } from '../organisms/card/_interfaces/card.interfaces';

import {
    IOrganisationEnum,
    IOrganisationStatusEnum,
    IMainAudienceEnum,
    IFundingModelEnum,
    IYesNoEnum,
    IPolicyAndAdvocacyActivityNameEnum,
    ITrainingEnum,
    ITrainingModuleEnum,
    IResourceActivityEnum,
} from './common.enums';
import { ICountryEnum } from './geography.enums';

export interface IOrganisation {
    id: IOrganisationEnum;
    card: ICard;
    name?: IOrganisationEnum;
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

// export interface ILocation {
//     address?: string;
//     lat: string;
//     lon: string;
// }

// export interface IResourcesAndInformation {}

export interface IStakeholder {
    fundingModel: IFundingModelEnum;
    members?: string[];
    overlapWithOurMembers?: string;
}

// export interface IPolicyAndAdvocacy {
//     doTheyUndertakePolicyAdvocacyActivities?: IYesNoEnum;
//     activities?: IPolicyAndAdvocacyActivity[];
// }

// export interface IPolicyAndAdvocacyActivity {
//     name: IPolicyAndAdvocacyActivityNameEnum;
//     description: string;
// }

// export interface ITraining {
//     name: ITrainingEnum;
//     modules: ITrainingModuleEnum[];
//     description: string;
// }

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
