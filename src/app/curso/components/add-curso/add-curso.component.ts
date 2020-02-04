import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Curso } from '../../models';

@Component({
  selector: 'app-add-curso',
  templateUrl: './add-curso.component.html',
  styleUrls: ['./add-curso.component.css']
})
export class AddCursoComponent implements OnInit {
  nuevoCurso:Curso;
  temp:object;
  constructor() { }
  @Output()
  nuevoCursoEmitter:EventEmitter<Curso>=new EventEmitter();

  ngOnInit() {
  }
  agregarCurso(){
    this.nuevoCurso={nombre:document.getElementById("nombreCurso").value,descripcion:document.getElementById("descripcionCurso").value,imgUrl:document.getElementById("imagenCurso").value};
    console.log(this.nuevoCurso);
    // this.nuevoCursoEmitter.emit(this.nuevoCurso);
  }

}
