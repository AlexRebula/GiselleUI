import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'gee-menu-list-template',
    templateUrl: './menu-list-template.component.html',
    styleUrls: ['./menu-list-template.component.scss'],
})
export class MenuListTemplateComponent implements OnInit {
    @Input()
    label: string | undefined;
    @Input()
    items: any[] | undefined;

    constructor() {}

    ngOnInit(): void {}
}
