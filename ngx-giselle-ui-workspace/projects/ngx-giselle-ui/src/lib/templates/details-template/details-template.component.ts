import { Component, Input, OnInit } from '@angular/core';
import { IFormSection } from '../../organisms/form/_interfaces/form.interfaces';
import { IMenuList } from '../menu-template/_interfaces/menu.interfaces';
import { IDetails } from './_interface/details.interfaces';
import { DetailsService } from './_services/details.service';

@Component({
    selector: 'gee-details-template',
    templateUrl: './details-template.component.html',
    styleUrls: ['./details-template.component.scss'],
})
export class DetailsTemplateComponent implements OnInit {
    @Input()
    config: IDetails | undefined;

    @Input()
    detailsFormSections: IFormSection[] | undefined;

    menuLists: IMenuList[] | undefined = [];

    constructor(private detailsService: DetailsService) {}

    ngOnInit(): void {}
}
