import { Component, Input, OnInit } from '@angular/core';
import {
    IButtonIconSizeEnum,
    IFontAwesomeIconEnum,
} from '../../atoms/button/_interfaces/button.enums';
import { IICon } from '../../atoms/icon/_interfaces/icon.interfaces';
import { UtilityService } from '../../_services/utility.service';

@Component({
    selector: 'gee-matrix',
    templateUrl: './matrix.component.html',
    styleUrls: ['./matrix.component.scss'],
})
export class MatrixComponent implements OnInit {
    showActivityClassArray = [];
    @Input()
    matrixHeaders: any;
    @Input()
    defaultColumns: any;
    @Input()
    items: any;
    constructor(private utilityService: UtilityService) {}

    ngOnInit(): void {
        this.showActivityClassArray = this.utilityService.deepCloneObject(
            this.defaultColumns
        );
    }

    getArrayFromCommaSeparatedString(
        items: string | undefined
    ): string[] | undefined {
        let result: string[] | undefined = [];

        result = items?.split(',');

        return result;
    }

    getActivityIcon(activity: string): IICon {
        let checkIcon: IICon = {
            size: IButtonIconSizeEnum.fa1x,
            name: IFontAwesomeIconEnum.faCheck,
        };

        let faSpa: IICon = {
            size: IButtonIconSizeEnum.fa1x,
            name: IFontAwesomeIconEnum.faSpa,
        };

        switch (activity.toLowerCase()) {
            case 'y':
                return checkIcon;
            default:
                return checkIcon;
        }
    }

    getActivityCSSName(index: number): string {
        let headersArray = this.matrixHeaders.split(',');
        let result;
        if (headersArray && headersArray[index]) {
            result = headersArray[index]
                .toLowerCase()
                .trim()
                .replace('/', '')
                .replace('&', '')
                .replace(' ', '-')
                .replace('  ', '-')
                .replace(' ', '-')
                .replace('--', '');
            // console.log(result);
        }

        if (result) return result;
        else return '';
    }

    onHideColumnButtonClick(index: number) {
        let headersArray = this.matrixHeaders.split(',');
        let itemToRemove = 'show__';
        let cssSuffix = '';
        if (headersArray) {
            cssSuffix = headersArray[index]
                .toLowerCase()
                .trim()
                .replace('/', '')
                .replace('&', '')
                .replace(' ', '-')
                .replace('  ', '-')
                .replace(' ', '-')
                .replace('--', '');

            itemToRemove = itemToRemove + cssSuffix;

            this.showActivityClassArray = this.showActivityClassArray.filter(
                (e) => e !== itemToRemove
            );
            // console.log(result);
        }
    }

    onShowAllColumnButtonClick() {
        this.showActivityClassArray = this.utilityService.deepCloneObject(
            this.defaultColumns
        );
    }
}
