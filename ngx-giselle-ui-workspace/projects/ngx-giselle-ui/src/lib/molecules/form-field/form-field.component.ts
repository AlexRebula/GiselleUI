import {
    Component,
    EventEmitter,
    HostBinding,
    Input,
    OnInit,
    Output,
} from '@angular/core';
import { IFormFieldTypeEnum } from './_interfaces/form-field.interface';

@Component({
    selector: 'gee-form-field',
    templateUrl: './form-field.component.html',
    styleUrls: ['./form-field.component.scss'],
})
export class FormFieldComponent implements OnInit {
    @Input()
    id: string | undefined;

    @Input()
    type: IFormFieldTypeEnum | undefined = IFormFieldTypeEnum.text;

    @Input()
    label: string | undefined;

    @Input()
    value: string | undefined;

    @Input()
    readOnly: boolean | undefined = false;

    @HostBinding('class.is-readonly') readOnlyClass: boolean | undefined = true;

    @Output()
    valueChange = new EventEmitter<string>();

    @Input()
    options: string[] | undefined = [];

    constructor() {}

    ngOnInit(): void {
        if (!this.type) {
            this.type = IFormFieldTypeEnum.text;
        }
        this.readOnlyClass = this.readOnly;
    }

    optionSelected(option: string) {
        let result = this.options?.filter((o) => {
            return o === this.value;
        });

        if (result && result.length) {
            return '';
        }

        return null;
    }
}
