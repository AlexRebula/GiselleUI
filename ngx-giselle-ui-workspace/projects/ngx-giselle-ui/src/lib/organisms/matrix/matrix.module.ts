import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixComponent } from './matrix.component';
import { IconModule } from '../../atoms/icon/icon.module';

@NgModule({
    declarations: [MatrixComponent],
    imports: [CommonModule, IconModule],
    exports: [MatrixComponent],
})
export class MatrixModule {}
