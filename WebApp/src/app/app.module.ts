import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule }          from '@angular/forms';
import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EstadoComponent } from './cadastros/estado/estado/estado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { EstadoService } from './cadastros/estado/estado.service';
import { DialogComponent } from './shared/dialog/dialog.component'

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule
} from '@angular/material';
import { SpinnerService } from './shared/services/spinner.service';
import { EstadoNovoComponent } from './cadastros/estado/estado-novo/estado-novo.component';
import { MunicipioComponent } from './cadastros/municipio/municipio/municipio.component';
import { MunicipioService } from './cadastros/municipio/municipio.service';
import { MunicipioListComponent } from './cadastros/municipio/municipio-list/municipio-list.component';
import { GetallComponent } from './cadastros/Zils/getall/getall.component';
import { AdicionarComponent } from './cadastros/Zils/adicionar/adicionar.component';
import { RemoverComponent } from './cadastros/Zils/remover/remover.component';
import { AlterarComponent } from './cadastros/Zils/alterar/alterar.component';
import { ZilsService } from './cadastros/Zils/Zils.service';

@NgModule({
  declarations: [
    AppComponent,
    EstadoComponent,
    PageNotFoundComponent,
    DialogComponent,
    EstadoNovoComponent,
    MunicipioComponent,
    MunicipioListComponent,
    GetallComponent,
    AdicionarComponent,
    RemoverComponent,
    AlterarComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ToastModule.forRoot(),
    AppRoutingModule, 
    HttpClientModule, 

    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatStepperModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatTooltipModule,
    MatSidenavModule
  ],
  entryComponents: [
   // MessageComponent,    
   // NotificacaoComponent,
    DialogComponent
  ],
  providers: [
    HttpClient, 
    EstadoService, 
    MunicipioService,
    ZilsService,
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
