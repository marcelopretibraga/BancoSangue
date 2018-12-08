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
import { DialogComponent } from './shared/dialog/dialog.component';
import { VeiculoService } from './cadastros/veiculo/veiculo.service';

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
import { VeiculoComponent } from './cadastros/veiculo/veiculo/veiculo.component';
import { VeiculoListComponent } from './cadastros/veiculo/veiculo-list/veiculo-list.component';
import { VeiculoNovoComponent } from './cadastros/veiculo/veiculo-novo/veiculo-novo.component';
import { VeiculoService } from './cadastros/veiculo/veiculo.service';

@NgModule({
  declarations: [
    AppComponent,
    EstadoComponent,
    PageNotFoundComponent,
    DialogComponent,
    EstadoNovoComponent,
    MunicipioComponent,
    MunicipioListComponent,
    VeiculoComponent,
    VeiculoListComponent,
    VeiculoNovoComponent    
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
    VeiculoService,
    SpinnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
