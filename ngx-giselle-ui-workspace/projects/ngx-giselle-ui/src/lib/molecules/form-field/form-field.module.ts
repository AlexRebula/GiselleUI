import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldComponent } from './form-field.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [FormFieldComponent],
    imports: [CommonModule, FormsModule],
    exports: [FormFieldComponent],
})
export class FormFieldModule {}
