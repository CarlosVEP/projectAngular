import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Curso } from '../../models';

@Component({
  selector: 'app-item-curso',
  templateUrl: './item-curso.component.html',
  styleUrls: ['./item-curso.component.css']
})
export class ItemCursoComponent implements OnInit {
  @Input()
  curso:Curso;

  @Output()
  nombreEmitter:EventEmitter<string>=new EventEmitter();//El EventEmitter debe ser de angular/core
  constructor() { }

  ngOnInit() {
  }
  enviarNombre(nombreCurso:string):void{
    console.log("tratando de enviar: "+nombreCurso);
    this.nombreEmitter.emit(nombreCurso);
  }

}
