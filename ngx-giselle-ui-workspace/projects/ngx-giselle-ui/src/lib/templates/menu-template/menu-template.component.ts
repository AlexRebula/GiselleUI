import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'gee-menu-template',
    templateUrl: './menu-template.component.html',
    styleUrls: ['./menu-template.component.scss'],
})
export class MenuTemplateComponent implements OnInit {
    @Input()
    lists: any[] | undefined;

    constructor() {}

    ngOnInit(): void {}
}
