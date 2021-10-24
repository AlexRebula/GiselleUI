import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
    selector: 'gee-flex-column',
    templateUrl: './flex-column.component.html',
    styleUrls: ['./flex-column.component.scss'],
})
export class FlexColumnComponent implements OnInit {
    @Input()
    col: number | undefined;

    @HostBinding('class.col-1') get colValue1() {
        return this.col === 1;
    }
    @HostBinding('class.col-2') get colValue2() {
        return this.col === 2;
    }
    @HostBinding('class.col-3') get colValue3() {
        return this.col === 3;
    }
    @HostBinding('class.col-4') get colValue4() {
        return this.col === 4;
    }
    @HostBinding('class.col-5') get colValue5() {
        return this.col === 5;
    }
    @HostBinding('class.col-6') get colValue6() {
        return this.col === 6;
    }
    @HostBinding('class.col-7') get colValue7() {
        return this.col === 7;
    }
    @HostBinding('class.col-8') get colValue8() {
        return this.col === 8;
    }
    @HostBinding('class.col-9') get colValue9() {
        return this.col === 9;
    }
    @HostBinding('class.col-10') get colValue10() {
        return this.col === 10;
    }
    @HostBinding('class.col-11') get colValue11() {
        return this.col === 11;
    }
    @HostBinding('class.col-12') get colValue12() {
        return this.col === 2;
    }

    constructor() {}

    ngOnInit() {}
}
