import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuItemComponent } from './menu-item.component';

@NgModule({
    declarations: [MenuItemComponent],
    imports: [CommonModule],
    exports: [MenuItemComponent],
})
export class MenuItemModule {}
