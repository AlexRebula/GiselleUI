import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { TogglePanelModule } from '../../molecules/toggle-panel/toggle-panel.module';
import { FormFieldModule } from '../../molecules/form-field/form-field.module';

@NgModule({
    declarations: [FormComponent],
    imports: [CommonModule, TogglePanelModule, FormFieldModule],
    exports: [FormComponent],
})
export class FormModule {}
