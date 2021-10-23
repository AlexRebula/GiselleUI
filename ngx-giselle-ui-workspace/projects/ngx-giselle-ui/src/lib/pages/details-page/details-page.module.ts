import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsPageComponent } from './details-page.component';
import { DetailsTemplateModule } from '../../templates/details-template/details-template.module';

@NgModule({
    declarations: [DetailsPageComponent],
    imports: [CommonModule, DetailsTemplateModule],
    exports: [DetailsPageComponent],
})
export class DetailsPageModule {}
