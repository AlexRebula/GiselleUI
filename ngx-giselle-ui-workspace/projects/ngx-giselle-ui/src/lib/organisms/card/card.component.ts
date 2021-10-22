import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IOrganisation } from '../../_interfaces/common-viewmodel.interfaces';

@Component({
    selector: 'gee-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    @Input()
    config: IOrganisation | undefined;

    routerLink: any | undefined;
    constructor(private router: Router) {}

    ngOnInit(): void {
        this.routerLink = [`/organisation/${this.config?.id}`];
    }

    onViewLinkClick(id: string) {
        const queryParams = {
            id: this.config?.id,
        };
        this.router.navigate(['/organisation'], {
            queryParams,
            skipLocationChange: true,
        });
    }
}
