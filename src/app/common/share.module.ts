import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , NgForm , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { HttpService } from './services/http.service';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogService } from './components/dialog/dialog.service';
import { TipService } from './components/tip/tip.service';
import { TipComponent } from './components/tip/tip.component';
import { CarouselComponent } from './components/carousel/carousel.component';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { LdatepickerComponent } from './components/ldatepicker/ldatepicker.component';
import { DealmonthPipe } from './components/ldatepicker/dealmonth.pipe';
import { DealhourPipe } from './components/ldatepicker/dealhour.pipe';
import { HovertipDirective } from './components/hovertip/hovertip.directive';
import {HovertipComponent} from './components/hovertip/hovertip.component';

@NgModule({
    declarations: [ DialogComponent , NotfoundComponent, TipComponent, CarouselComponent, LdatepickerComponent, DealmonthPipe, DealhourPipe, HovertipDirective , HovertipComponent],
    imports: [ CommonModule , FormsModule , ReactiveFormsModule],
    exports: [ DialogComponent ,
               TipComponent ,
               CarouselComponent ,
               LdatepickerComponent ,
               HttpClientModule ,
               ConfirmDialogModule,
               CommonModule ,
               FormsModule ,
               ReactiveFormsModule ,
               HovertipDirective,
               HovertipComponent,
               NgForm],
    entryComponents : [HovertipComponent],
    providers: [ HttpService , TipService , DialogService , ConfirmationService ]
})

export class ShareModule {}
