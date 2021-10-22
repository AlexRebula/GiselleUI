import { NgxGiselleUiModule } from './../../../ngx-giselle-ui/src/lib/ngx-giselle-ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, NgxGiselleUiModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
