import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar.component';
import { ButtonModule } from '../../atoms/button/button.module';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [SearchBarComponent],
    imports: [CommonModule, ButtonModule, FormsModule],
    exports: [SearchBarComponent],
})
export class SearchBarModule {}
