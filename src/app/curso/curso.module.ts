import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursoRoutingModule } from './curso-routing.module';
import { ListaCursoComponent } from './components/lista-curso/lista-curso.component';
import { ItemCursoComponent } from './components/item-curso/item-curso.component';
import { AddCursoComponent } from './components/add-curso/add-curso.component';
import { MaterialModule } from '../material.module';


@NgModule({
  declarations: [ListaCursoComponent, ItemCursoComponent, AddCursoComponent],
  imports: [
    CommonModule,
    CursoRoutingModule,
    MaterialModule
  ]
})
export class CursoModule { }
