import { Component, Input, OnInit } from '@angular/core';
import { IFormSection } from './_interfaces/form.interfaces';

@Component({
    selector: 'gee-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
    @Input()
    formSections: IFormSection[] | undefined;

    @Input()
    alwaysExpanded: boolean | undefined = false;

    constructor() {}

    ngOnInit(): void {}
}
