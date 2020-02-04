import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[MatButtonModule]//se agregó esta línea para que los otros módulos puedan verlo
})
export class MaterialModule { }
