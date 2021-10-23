import { MenuListTemplateModule } from './../menu-list-template/menu-list-template.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuTemplateComponent } from './menu-template.component';

@NgModule({
    declarations: [MenuTemplateComponent],
    imports: [CommonModule, MenuListTemplateModule],
    exports: [MenuTemplateComponent],
})
export class MenuTemplateModule {}
