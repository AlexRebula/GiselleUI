import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'gee-menu-link',
    templateUrl: './menu-link.component.html',
    styleUrls: ['./menu-link.component.scss'],
})
export class MenuLinkComponent implements OnInit {
    @Input()
    isActive: boolean | undefined = false;

    @Input()
    value: string | undefined;

    constructor() {}

    ngOnInit(): void {}
}
