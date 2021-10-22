import { Component, Input, OnInit } from '@angular/core';
import { IICon } from '../icon/_interfaces/icon.interfaces';
import {
    IButtonColorEnum,
    IButtonIconSizeEnum,
    IButtonSizeEnum,
} from './_interfaces/button.enums';

@Component({
    selector: 'gee-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
    @Input()
    color: IButtonColorEnum | undefined = IButtonColorEnum.primary;

    @Input()
    size: IButtonSizeEnum | undefined;

    @Input()
    disabled = false;

    @Input()
    text: string | undefined;

    @Input()
    isLight = false;

    @Input()
    isFullWidth = false;

    @Input()
    isOutlined = false;

    @Input()
    isInverted = false;

    @Input()
    isRounded = false;

    @Input()
    isHovered = false;

    @Input()
    isFocused = false;

    @Input()
    isActive = false;

    @Input()
    isLoading = false;

    @Input()
    iconSize: IButtonIconSizeEnum | undefined;

    @Input()
    icon: IICon | undefined;

    constructor() {}

    ngOnInit(): void {}
}
