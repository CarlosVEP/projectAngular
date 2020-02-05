import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaCursoComponent } from './components/lista-curso/lista-curso.component';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { VerCursoComponent } from './components/ver-curso/ver-curso.component';


const routes: Routes = [{
  path:'listacursos',
  component: ListaCursoComponent
},
{
  path: 'nuevo',
  component: NuevoCursoComponent
},
{
  path: 'editar',
  component: EditarCursoComponent
},
{
  path: 'ver',
  component: VerCursoComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursoRoutingModule { }
