import { Component, Input, OnInit } from '@angular/core';
import {
    IButtonColorEnum,
    IButtonIconSizeEnum,
    IFontAwesomeIconEnum,
} from '../../atoms/button/_interfaces/button.enums';
import { IICon } from '../../atoms/icon/_interfaces/icon.interfaces';

@Component({
    selector: 'gee-toggle-panel',
    templateUrl: './toggle-panel.component.html',
    styleUrls: ['./toggle-panel.component.scss'],
})
export class TogglePanelComponent implements OnInit {
    @Input()
    title: string | undefined;

    @Input()
    alwaysExpanded: boolean | undefined = false;

    iconSize = IButtonIconSizeEnum.fa2x;

    carouselControlButtonColor: IButtonColorEnum | undefined =
        IButtonColorEnum.primary;

    icon: IICon | undefined = {
        name: IFontAwesomeIconEnum.faAngleDown,
        size: this.iconSize,
    };

    isExpanded = true;

    toggleButtonColor = IButtonColorEnum.white;

    constructor() {}

    ngOnInit(): void {}

    onTogglePanelButtonClick() {
        this.isExpanded = !this.isExpanded;
        this.icon = this.isExpanded
            ? {
                  name: IFontAwesomeIconEnum.faAngleDown,
                  size: this.iconSize,
              }
            : {
                  name: IFontAwesomeIconEnum.faAngleRight,
                  size: this.iconSize,
              };
    }
}
