import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';


//const routes: Routes = [];//original
const routes: Routes = [{
  path:'listaestudiantes',
  component: ListaEstudiantesComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstudianteRoutingModule { }
