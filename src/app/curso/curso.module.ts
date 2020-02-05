import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { CursoRoutingModule } from './curso-routing.module';
import { ListaCursoComponent } from './components/lista-curso/lista-curso.component';
import { ItemCursoComponent } from './components/item-curso/item-curso.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { MaterialModule } from '../material.module';
import { EditarCursoComponent } from './components/editar-curso/editar-curso.component';
import { VerCursoComponent } from './components/ver-curso/ver-curso.component';
import { NuevoCursoComponent } from './components/nuevo-curso/nuevo-curso.component';


@NgModule({
  declarations: [ListaCursoComponent, ItemCursoComponent, AddCursoComponent, EditarCursoComponent, VerCursoComponent, NuevoCursoComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class CursoModule { }
