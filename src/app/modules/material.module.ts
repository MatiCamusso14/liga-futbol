import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTreeModule } from '@angular/material/tree';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule, MatSpinner } from '@angular/material/progress-spinner';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatOptionModule, MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
@NgModule({
    declarations: [

    ],

    exports: [
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatSidenavModule,
        MatCardModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatInputModule,
        MatTableModule,
        MatOptionModule,
        MatMenuModule,
        MatSelectModule,
        MatRadioModule,
        MatSnackBarModule,
        MatDialogModule,
        MatCheckboxModule,
        MatListModule,
        MatGridListModule,
        MatTreeModule,
        MatProgressBarModule,
        MatDatepickerModule,
        MatSliderModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatPaginatorModule,
        MatTooltipModule,
        MatStepperModule,
        MatTabsModule,
        MatSortModule,
        MatProgressBarModule,
        MatExpansionModule,
        MatSliderModule,
        MatSlideToggleModule,
        MatDividerModule,
    ],

    imports: [
        CommonModule
    ]
})
export class MaterialModule { }
