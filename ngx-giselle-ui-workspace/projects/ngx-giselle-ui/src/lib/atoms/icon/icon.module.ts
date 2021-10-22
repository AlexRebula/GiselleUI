import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
    declarations: [IconComponent],
    imports: [CommonModule, FontAwesomeModule],
    exports: [IconComponent],
})
export class IconModule {}
