import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatrixComponent } from './matrix.component';

@NgModule({
    declarations: [MatrixComponent],
    imports: [CommonModule],
    exports: [MatrixComponent],
})
export class MatrixModule {}
