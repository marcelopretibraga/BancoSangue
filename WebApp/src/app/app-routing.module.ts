import { NortonComponent } from './cadastros/norton/norton/norton.component';
import { NortonListComponent } from './cadastros/norton/norton-list/norton-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoComponent } from './cadastros/estado/estado/estado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EstadoNovoComponent } from './cadastros/estado/estado-novo/estado-novo.component';
import { MunicipioComponent } from './cadastros/municipio/municipio/municipio.component';
import { MunicipioListComponent } from './cadastros/municipio/municipio-list/municipio-list.component';

const appRoutes: Routes = [
  { path: 'estado/list', component: EstadoComponent },
  { path: 'estado/novo', component: EstadoNovoComponent},
  { path: 'estado/editar/:id',  component: EstadoNovoComponent },
  { path: 'municipo', component: MunicipioComponent },
  { path: 'municipo/editar/:id', component: MunicipioComponent },
  { path: 'municipio/list', component: MunicipioListComponent},
  { path: 'norton', component: NortonComponent},
  { path: 'norton/editar/:id', component: NortonComponent},
  { path: 'norton/list', component: NortonListComponent},
 // { path: 'heroes',        component: HeroListComponent },
  { path: '',   redirectTo: '/BancoSangue', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
