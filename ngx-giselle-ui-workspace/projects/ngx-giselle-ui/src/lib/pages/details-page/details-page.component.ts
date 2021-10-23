import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IFormFieldTypeEnum } from '../../molecules/form-field/_interfaces/form-field.interface';
import { IFormSection } from '../../organisms/form/_interfaces/form.interfaces';
import {
    IHeroColorEnum,
    ISectionSizeEnum,
    ISectionTypeEnum,
} from '../../organisms/section/_interfaces/section.interfaces';
import { IDetails } from '../../templates/details-template/_interface/details.interfaces';
import { DetailsService } from '../../templates/details-template/_services/details.service';
import {
    IOrganisation,
    IUIModeEnum,
} from '../../_interfaces/common-viewmodel.interfaces';
import { ITrainingEnum } from '../../_interfaces/common.enums';

@Component({
    selector: 'gee-details-page',
    templateUrl: './details-page.component.html',
    styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
    id: string | undefined;

    detailsConfig: IDetails | undefined;

    organisation: IOrganisation | undefined;

    data: any;

    uiMode: IUIModeEnum = IUIModeEnum.read;

    trainingOptions: ITrainingEnum[] = [];

    constructor(
        private route: ActivatedRoute,
        private detailsService: DetailsService
    ) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            this.id = params['id'];

            if (this.id) {
                this.organisation = this.detailsService.getOrganisationById(
                    this.id
                );
            }

            this.data = {
                id: this.organisation?.id,
                name: this.organisation?.name,
                description: this.organisation?.description,
                websiteURL: this.organisation?.websiteURL,
                status: this.organisation?.status,
                // card: this.organisation?.card,
                country: this.organisation?.country,
                address: this.organisation?.address,
                lat: this.organisation?.lat,
                lon: this.organisation?.lon,

                primaryFocusAreas: this.organisation?.primaryFocusAreas,
                mainAudience: this.organisation?.mainAudience,
                doTheyConductTrainings:
                    this.organisation?.doTheyConductTrainings,
                typesOfTraining: this.organisation?.typesOfTraining,
                resourcesByTopic: this.organisation?.resourcesByTopic,

                trainings: this.organisation?.trainings,
                stakeholdersFundingModel:
                    this.organisation?.stakeholdersFundingModel,
                stakeholdersMembers: this.organisation?.stakeholdersMembers,
                stakeholdersOverlapWithOurMembers:
                    this.organisation?.stakeholdersOverlapWithOurMembers,
                doTheyUndertakePolicyAdvocacyActivities:
                    this.organisation?.doTheyUndertakePolicyAdvocacyActivities,
                policyAndAdvocacyActivityTypes:
                    this.organisation?.policyAndAdvocacyActivityTypes,

                activities: this.organisation?.activities,
            };

            this.trainingOptions = this.detailsService.getTrainingOptions();

            let detailsFormSections: IFormSection[] = [
                {
                    title: 'General Information',
                    fields: [
                        {
                            id: 'description',
                            label: 'Description',
                            type: IFormFieldTypeEnum.textArea,
                            value: this.data.description,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                        {
                            id: 'country',
                            label: 'Country',
                            value: this.data.country,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                        {
                            id: 'status',
                            label: 'Status',
                            value: this.data.status,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                        {
                            id: 'websiteURL',
                            label: 'Website',
                            value: this.data.websiteURL,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                    ],
                },
                {
                    title: 'Resources and Information',
                    fields: [
                        {
                            id: 'primaryFocusAreas',
                            label: 'Primary Focus Areas',
                            value: this.data.primaryFocusAreas,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },

                        {
                            id: 'mainAudience',
                            label: 'Main Audience',
                            value: this.data.mainAudience,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                        {
                            id: 'doTheyConductTrainings',
                            label: 'Do they conduct trainings',
                            value: this.data.doTheyConductTrainings,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                        {
                            id: 'trainings',
                            label: 'Trainings',
                            value: this.data.trainings,
                            options: this.trainingOptions,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                            type: IFormFieldTypeEnum.select,
                        },
                        {
                            id: 'typesOfTraining',
                            label: 'Types of Training',
                            value: this.data.typesOfTraining,
                            // options: this.trainingOptions,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                        {
                            id: 'resourcesByTopic',
                            label: 'Resources by Topic',
                            value: this.data.resourcesByTopic,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                    ],
                },
                {
                    title: 'Stakeholders',
                    fields: [
                        {
                            id: 'stakeholdersFundingModel',
                            label: 'Funding Model',
                            value: this.data.stakeholdersFundingModel,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                        {
                            id: 'stakeholdersMembers',
                            label: 'Who are their members (if applicable) ',
                            value: this.data.stakeholdersMembers,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                        {
                            id: 'stakeholdersOverlapWithOurMembers',
                            label: 'Overlap with our members? ',
                            value: this.data.stakeholdersOverlapWithOurMembers,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                    ],
                },
                {
                    title: 'Policy and Advocacy',
                    fields: [
                        {
                            id: 'doTheyUndertakePolicyAdvocacyActivities',
                            label: 'Do they undertake any policy / advocacy activities?',
                            value: this.data
                                ?.doTheyUndertakePolicyAdvocacyActivities,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                        {
                            id: 'policyAndAdvocacyActivityTypes',
                            label: 'What type of activities?',
                            value: this.data.policyAndAdvocacyActivityTypes,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                        {
                            id: 'activities',
                            label: 'All Activities?',
                            value: this.data.activities,
                            readOnly: this.uiMode !== IUIModeEnum.update,
                        },
                    ],
                },
            ];

            this.detailsConfig = {
                id: params['id'],
                heroBanner: {
                    type: ISectionTypeEnum.hero,
                    color: IHeroColorEnum.info,
                    title: this.organisation?.card.title,
                    subtitle: this.organisation?.card.body,
                    // content: ECOSYSTEM_MAPPING,
                },
                formSections: detailsFormSections,
                alwaysExpanded: true,
                menuLists: this.organisation?.menuLists,
                overviewMatrix: {
                    matrixHeaders: `Organisation,Status,Funding model,Advocacy / policy,Audience,Mental health conditions,Psychosocial hazards ,Regulation,Workplace strategies & tools,Supporting recovery,Training,Manager training,All workers training,Other`,
                    defaultColumns: [
                        'show__status',
                        'show__funding-model',
                        'show__advocacypolicy',
                        'show__audience',
                        'show__mental-health-condition',
                        'show__psychosocial-hazards',
                        'show__regulation',
                        'show__workplace-strategies-tools',
                        'show__supporting-recovery',
                        'show__training',
                        'show__manager-training',
                        'show__all-workers-training',
                    ],
                    items: [this.organisation],
                    sectionColor: IHeroColorEnum.info,
                    sectionSize: ISectionSizeEnum.medium,
                },
            };
        });
    }
}
