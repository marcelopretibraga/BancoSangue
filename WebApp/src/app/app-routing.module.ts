import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoComponent } from './cadastros/estado/estado/estado.component';
import { PedroComponent } from './cadastros/pedro/pedro/pedro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EstadoNovoComponent } from './cadastros/estado/estado-novo/estado-novo.component';
import { PedroNovoComponent } from './cadastros/pedro/pedro-novo/pedro-novo.component';
import { MunicipioComponent } from './cadastros/municipio/municipio/municipio.component';
import { MunicipioListComponent } from './cadastros/municipio/municipio-list/municipio-list.component';

const appRoutes: Routes = [
  { path: 'estado/list', component: EstadoComponent },
  { path: 'estado/novo', component: EstadoNovoComponent},
  { path: 'estado/editar/:id',  component: EstadoNovoComponent },
  { path: 'municipo', component: MunicipioComponent },
  { path: 'pedro/list', component: PedroComponent },
  { path: 'pedro/novo', component: PedroNovoComponent},
  { path: 'pedro/editar/:id',  component: PedroNovoComponent },
  { path: 'municipo', component: MunicipioComponent },
  { path: 'municipo/editar/:id', component: MunicipioComponent },
  { path: 'municipio/list', component: MunicipioListComponent},
 // { path: 'heroes',        component: HeroListComponent },
  { path: '',   redirectTo: '/BancoSangue', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
