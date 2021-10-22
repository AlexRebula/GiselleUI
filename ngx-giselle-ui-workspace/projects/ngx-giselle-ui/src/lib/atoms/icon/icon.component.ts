import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { Component, Input, OnInit } from '@angular/core';
import {
    faCoffee,
    faCog,
    faDog,
    faBrain,
    faCross,
    faLevelDownAlt,
    faUserFriends,
    faRunning,
    faChartLine,
    faDna,
    faSuitcase,
    faSwatchbook,
    faChalkboardTeacher,
    faIndustry,
    faBandAid,
    faSpa,
    faStar,
    faBus,
    faThumbsUp,
    faAngleUp,
    faAngleDown,
    faAngleLeft,
    faAngleRight,
    faCheck,
    faCircleNotch,
} from '@fortawesome/free-solid-svg-icons';
import { IICon } from './_interfaces/icon.interfaces';
import { IButtonIconSizeEnum } from '../button/_interfaces/button.enums';
@Component({
    selector: 'gee-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnInit {
    @Input()
    icon: IICon | undefined;

    iconName: any;
    iconSize: any;

    constructor(private library: FaIconLibrary) {}

    ngOnInit(): void {
        if (this.icon && this.icon.name) {
            this.iconName = this.icon.name;
        }

        if (this.icon && this.icon.size) {
            this.iconSize = this.icon.size;
        }
        this.library.addIcons(
            faCoffee,
            faCog,
            faDog,
            faBrain,
            faCross,
            faLevelDownAlt,
            faUserFriends,
            faRunning,
            faChartLine,
            faDna,
            faSuitcase,
            faSwatchbook,
            faChalkboardTeacher,
            faIndustry,
            faBandAid,
            faSpa,
            faStar,
            faBus,
            faThumbsUp,
            faAngleUp,
            faAngleDown,
            faAngleLeft,
            faAngleRight,
            faCheck
        );

        if (this.icon && !this.icon.size) {
            this.icon.size = IButtonIconSizeEnum.fa2x;
        }
    }
}
