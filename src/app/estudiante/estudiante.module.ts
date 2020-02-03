import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { EstudianteRoutingModule } from './estudiante-routing.module';
import { ListaEstudiantesComponent } from './lista-estudiantes/lista-estudiantes.component';


@NgModule({
  declarations: [ListaEstudiantesComponent],
  imports: [
    CommonModule,
    EstudianteRoutingModule,
    FormsModule
  ]
})
export class EstudianteModule { }
