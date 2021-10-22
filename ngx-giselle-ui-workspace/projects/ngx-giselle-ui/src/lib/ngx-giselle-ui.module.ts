import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from './atoms/button/button.module';
import { IconModule } from './atoms/icon/icon.module';
import { MenuItemModule } from './atoms/menu-item/menu-item.module';
import { MenuLinkModule } from './atoms/menu-link/menu-link.module';
import { DropdownModule } from './molecules/dropdown/dropdown.module';
import { TogglePanelModule } from './molecules/toggle-panel/toggle-panel.module';
import { NgxGiselleUiComponent } from './ngx-giselle-ui.component';
import { CardModule } from './organisms/card/card.module';
import { FooterModule } from './organisms/footer/footer.module';
import { FormModule } from './organisms/form/form.module';
import { GoogleMapModule } from './organisms/google-map/google-map.module';
import { ListModule } from './organisms/list/list.module';
import { MatrixModule } from './organisms/matrix/matrix.module';
import { NavbarModule } from './organisms/navbar/navbar.module';
import { SearchBarModule } from './organisms/search-bar/search-bar.module';
import { SectionModule } from './organisms/section/section.module';
import { DetailsTemplateModule } from './templates/details-template/details-template.module';
import { LandingTemplateModule } from './templates/landing-template/landing-template.module';
import { MenuListTemplateModule } from './templates/menu-list-template/menu-list-template.module';
import { MenuTemplateModule } from './templates/menu-template/menu-template.module';

@NgModule({
    declarations: [NgxGiselleUiComponent],
    imports: [
        CommonModule,
        SectionModule,
        DropdownModule,
        NavbarModule,
        FooterModule,
        ButtonModule,
        IconModule,
        LandingTemplateModule,
        SearchBarModule,
        ListModule,
        CardModule,
        DetailsTemplateModule,
        TogglePanelModule,
        FormModule,
        MenuListTemplateModule,
        MenuLinkModule,
        MenuItemModule,
        MenuTemplateModule,
        MatrixModule,
        GoogleMapModule,
    ],
    exports: [
        NgxGiselleUiComponent,
        CommonModule,
        SectionModule,
        DropdownModule,
        NavbarModule,
        FooterModule,
        ButtonModule,
        IconModule,
        LandingTemplateModule,
        SearchBarModule,
        ListModule,
        CardModule,
        DetailsTemplateModule,
        TogglePanelModule,
        FormModule,
        MenuListTemplateModule,
        MenuLinkModule,
        MenuItemModule,
        MenuTemplateModule,
        MatrixModule,
        GoogleMapModule,
    ],
})
export class NgxGiselleUiModule {}
