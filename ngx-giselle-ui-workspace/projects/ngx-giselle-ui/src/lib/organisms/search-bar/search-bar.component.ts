import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IOption } from '../../_interfaces/common-viewmodel.interfaces';
import { ISearchBarConfig } from './_interfaces/search-bar.interfaces';

@Component({
    selector: 'gee-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
    @Input()
    config: ISearchBarConfig | undefined;

    @Output()
    keywordSearch: EventEmitter<any> = new EventEmitter();

    @Output()
    countrySearch: EventEmitter<any> = new EventEmitter();

    options: IOption[] | undefined;

    keywordValue: string = '';

    constructor() {}

    ngOnInit(): void {
        this.options = this.config?.options;
    }

    onKeywordSearch(event: any) {
        this.keywordSearch.emit(event.srcElement.value);
    }

    onCountrySearch(event: any) {
        this.keywordValue = '';
        this.countrySearch.emit(event.srcElement.value);
    }
}
