import { Component, Input, OnInit } from '@angular/core';
import { UtilityService } from '../../_services/utility.service';
import {
    IHeroColorEnum,
    ISectionSizeEnum,
    ISectionTypeEnum,
} from './_interfaces/section.interfaces';

@Component({
    selector: 'gee-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss'],
})
export class SectionComponent implements OnInit {
    @Input()
    size: ISectionSizeEnum | undefined;

    @Input()
    type: ISectionTypeEnum | undefined;

    @Input()
    color: IHeroColorEnum | undefined;

    @Input()
    title: string | undefined;

    @Input()
    subtitle: string | undefined;

    @Input()
    content: string | undefined;

    @Input()
    hasTextCentered: boolean | undefined = false;

    constructor(private utilityService: UtilityService) {}

    ngOnInit(): void {
        if (this.content) {
            this.content = this.utilityService.parseMarkdown(this.content);
        }
    }
}
