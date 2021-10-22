import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { IconModule } from '../../atoms/icon/icon.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [CardComponent],
    imports: [CommonModule, IconModule, RouterModule],
    exports: [CardComponent],
})
export class CardModule {}
