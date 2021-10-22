import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { SectionModule } from '../section/section.module';
import { CardModule } from '../card/card.module';
import { ButtonModule } from '../../atoms/button/button.module';

@NgModule({
    declarations: [ListComponent],
    imports: [CommonModule, SectionModule, CardModule, ButtonModule],
    exports: [ListComponent],
})
export class ListModule {}
