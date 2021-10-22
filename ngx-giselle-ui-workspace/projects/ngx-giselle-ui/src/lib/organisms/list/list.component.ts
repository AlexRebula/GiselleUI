import {
    Component,
    DoCheck,
    Input,
    KeyValueDiffer,
    KeyValueDiffers,
    OnInit,
} from '@angular/core';
import {
    IButtonColorEnum,
    IButtonIconSizeEnum,
    IFontAwesomeIconEnum,
} from '../../atoms/button/_interfaces/button.enums';
import { IICon } from '../../atoms/icon/_interfaces/icon.interfaces';
import { IOrganisation } from '../../_interfaces/common-viewmodel.interfaces';
import { ISection } from '../section/_interfaces/section.interfaces';
import { IOrganisationList } from './_interfaces/list.interfaces';

@Component({
    selector: 'gee-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, DoCheck {
    @Input()
    config: IOrganisationList | undefined;

    @Input()
    mode: string | undefined;

    @Input()
    items: IOrganisation[] | undefined;

    section: ISection | undefined;

    iconLeft: IICon | undefined;
    iconRight: IICon | undefined;

    carouselStyles: string | undefined;

    carouselMargin = 0;

    differ: KeyValueDiffer<string, any>;

    carouselControlButtonColor: IButtonColorEnum | undefined;

    constructor(private differs: KeyValueDiffers) {
        this.differ = this.differs.find({}).create();
    }

    ngOnInit(): void {
        this.iconLeft = {
            name: IFontAwesomeIconEnum.faAngleLeft,
            size: IButtonIconSizeEnum.fa1x,
        };
        this.iconRight = {
            name: IFontAwesomeIconEnum.faAngleRight,
            size: IButtonIconSizeEnum.fa1x,
        };
    }

    onCarouselNavigationButtonClick(direction: 'left' | 'right') {
        let itemSize = 420;

        const maxRight = this.config?.items
            ? this.config?.items.length * itemSize - document.body.clientWidth
            : 0;

        switch (direction) {
            case 'left':
                if (this.carouselMargin < 0) {
                    this.carouselMargin += itemSize;
                }
                break;
            case 'right':
                if (this.carouselMargin * -1 <= maxRight)
                    this.carouselMargin -= itemSize;
                break;
        }
        this.carouselStyles = `margin-left: ${this.carouselMargin}px`;
    }

    ngDoCheck() {
        const change = this.differ.diff(this);
        if (change) {
            change.forEachChangedItem((item) => {
                if (item.key === 'items') {
                    this.carouselMargin = 0;
                    this.carouselStyles = `margin-left: ${this.carouselMargin}px`;
                }
            });
        }
    }
}
