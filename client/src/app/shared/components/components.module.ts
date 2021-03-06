import { Injectable, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DynaFormModule } from 'ng-dyna-form';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './filters/dropdown/dropdown.component';
import { CheckboxComponent } from './filters/checkbox/checkbox.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FilterComponent } from './filters/filter/filter.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { RouterModule } from '@angular/router';
import { AutocompleteComponent } from './filters/autocomplete/autocomplete.component';
import { TableComponent, TableModule } from 'mat-virtual-table';
import { I18nService } from '../services/i18n.service';
import { XLSXService } from '../services/xlsx.service';
import { TreeComponent } from './tree/tree.component';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { QuantityFilterComponent } from './filters/quantity-filter/quantity-filter.component';
import { DxRangeSelectorModule } from 'devextreme-angular';
import { SpecialFilterComponent } from './filters/special-filter/special-filter.component';
// import { SpecialFilterGridComponent } from './filters/special-filter-grid/special-filter-grid.component';
import { ComboboxComponent } from './filters/combobox/combobox.component';
import { ParameterPickerComponent } from './parameter-picker/parameter-picker.component';
import { MultiSliderRangeSelectorComponent } from './multi-slider-range-selector/multi-slider-range-selector.component';
import { DialogService } from '../services/dialog.service';
import { AngularSvgIconModule } from 'angular-svg-icon';
// import { ContentComponent } from './content/content.component';
const components = [
    DropdownComponent,
    CheckboxComponent,
    QuantityFilterComponent,
    FilterComponent,
    KeyboardComponent,
    TopbarComponent,
    NavMenuComponent,
    AutocompleteComponent,
    TreeComponent,
    SpecialFilterComponent,
    // SpecialFilterGridComponent,
    ComboboxComponent,
    MultiSliderRangeSelectorComponent,
    ParameterPickerComponent,
    // ContentComponent,
];

@Injectable()
export class CustomMatPaginatorIntl extends MatPaginatorIntl {
    base = new MatPaginatorIntl();

    set nextPageLabel(val) {}

    get nextPageLabel() {
        if (window.getComputedStyle(document.getElementsByTagName('mat-virtual-table')[0]).direction !== 'rtl') {
            return this.base.nextPageLabel;
        }
        return '??????';
    }

    set previousPageLabel(val) {}

    get previousPageLabel() {
        if (window.getComputedStyle(document.getElementsByTagName('mat-virtual-table')[0]).direction !== 'rtl') {
            return this.base.previousPageLabel;
        }
        return '????????';
    }

    getRangeLabel = (page, pageSize, length) => {
        if (window.getComputedStyle(document.getElementsByTagName('mat-virtual-table')[0]).direction !== 'rtl') {
            return this.base.getRangeLabel(page, pageSize, length);
        }
        if (length === 0 || pageSize === 0) {
            return '0 ???????? ' + length;
        }
        length = Math.max(length, 0);
        const startIndex = page * pageSize;
        // If the start index exceeds the list length, do not try and fix the end index to the end.
        const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
        return startIndex + 1 + ' - ' + endIndex + ' ???????? ' + length;
    }
}

@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        CommonModule,
        FlexLayoutModule,
        RouterModule,
        TableModule,
        DxRangeSelectorModule,
    ],
    declarations: components,
    exports: [
        DropdownComponent,
        CheckboxComponent,
        QuantityFilterComponent,
        FilterComponent,
        KeyboardComponent,
        TopbarComponent,
        NavMenuComponent,
        AutocompleteComponent,
        TreeComponent,
        SpecialFilterComponent,
        // SpecialFilterGridComponent,
        ComboboxComponent,
        // ContentComponent,
        MultiSliderRangeSelectorComponent,
        ParameterPickerComponent,
        TableModule,
        MaterialModule,
        FlexLayoutModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DynaFormModule,
        DxRangeSelectorModule,
        AngularSvgIconModule,
        DynaFormModule,
        RouterModule
    ],
    providers: [I18nService, XLSXService, { provide: MatPaginatorIntl, useClass: CustomMatPaginatorIntl }, DialogService],
    entryComponents: [ParameterPickerComponent, TableComponent],
})
export class ComponentsModule {}
