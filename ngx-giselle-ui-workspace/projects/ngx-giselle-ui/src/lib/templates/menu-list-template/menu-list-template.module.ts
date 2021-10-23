import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuListTemplateComponent } from './menu-list-template.component';
import { MenuLinkModule } from '../../atoms/menu-link/menu-link.module';

@NgModule({
    declarations: [MenuListTemplateComponent],
    imports: [CommonModule, MenuLinkModule],
    exports: [MenuListTemplateComponent],
})
export class MenuListTemplateModule {}
