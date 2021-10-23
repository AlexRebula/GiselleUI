import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsTemplateComponent } from './details-template.component';
import { SectionModule } from '../../organisms/section/section.module';
import { FormModule } from '../../organisms/form/form.module';
import { MenuListTemplateModule } from '../menu-list-template/menu-list-template.module';
import { MenuTemplateModule } from '../menu-template/menu-template.module';
import { MatrixModule } from '../../organisms/matrix/matrix.module';

@NgModule({
    declarations: [DetailsTemplateComponent],
    imports: [
        CommonModule,
        SectionModule,
        FormModule,
        MenuListTemplateModule,
        MenuTemplateModule,
        MatrixModule,
    ],
    exports: [DetailsTemplateComponent],
})
export class DetailsTemplateModule {}
