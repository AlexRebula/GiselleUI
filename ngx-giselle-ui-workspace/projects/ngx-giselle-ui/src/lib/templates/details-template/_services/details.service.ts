import { ITrainingEnum } from './../../../_interfaces/common.enums';
import { IOrganisation } from './../../../_interfaces/common-viewmodel.interfaces';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DetailsService {
    organisations: IOrganisation[] | undefined = [];
    constructor() {
        this.organisations = [];
    }

    getOrganisationById(id: string): IOrganisation | undefined {
        let result = this.organisations?.filter((o) => {
            return o.id === id;
        })[0];

        return result;
    }

    getTrainingOptions(): ITrainingEnum[] {
        return [ITrainingEnum.f2f, ITrainingEnum.virtualAndOnline];
    }
}
