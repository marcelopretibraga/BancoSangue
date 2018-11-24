import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadoComponent } from './cadastros/estado/estado/estado.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EstadoNovoComponent } from './cadastros/estado/estado-novo/estado-novo.component';
import { MunicipioComponent } from './cadastros/municipio/municipio/municipio.component';
import { MunicipioListComponent } from './cadastros/municipio/municipio-list/municipio-list.component';
import { GetallComponent } from './cadastros/Zils/getall/getall.component';
import { AdicionarComponent } from './cadastros/Zils/adicionar/adicionar.component';
import { RemoverComponent } from './cadastros/Zils/remover/remover.component';
import { AlterarComponent } from './cadastros/Zils/alterar/alterar.component';

const appRoutes: Routes = [
  { path: 'estado/list', component: EstadoComponent },
  { path: 'estado/novo', component: EstadoNovoComponent},
  { path: 'estado/editar/:id',  component: EstadoNovoComponent },
  { path: 'municipo', component: MunicipioComponent },
  { path: 'municipo/editar/:id', component: MunicipioComponent },
  { path: 'municipio/list', component: MunicipioListComponent},
  { path: 'Zils/getall', component: GetallComponent},
  { path: 'Zils/adicionar', component: AdicionarComponent},
  { path: 'Zils/remover', component: RemoverComponent},
  { path: 'Zils/alterar/:id', component: AlterarComponent},
 // { path: 'heroes',        component: HeroListComponent },
  { path: '',   redirectTo: '/BancoSangue', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
