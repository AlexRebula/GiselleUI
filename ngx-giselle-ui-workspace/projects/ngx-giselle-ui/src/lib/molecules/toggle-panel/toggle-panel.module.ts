import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TogglePanelComponent } from './toggle-panel.component';
import { IconModule } from '../../atoms/icon/icon.module';
import { ButtonModule } from '../../atoms/button/button.module';

@NgModule({
    declarations: [TogglePanelComponent],
    imports: [CommonModule, ButtonModule, IconModule],
    exports: [TogglePanelComponent],
})
export class TogglePanelModule {}
